const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: '1',
  brokers: ['192.168.132.129:9092']
})

const topic = 'test-1'
//producer
async function producer() {
  const producer = kafka.producer()
  console.log('connect...')
  await producer.connect()
  console.log('connected!!!!')
  await producer.send({
    topic,
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

  await producer.disconnect()
}



//consumer
async function consumer() {
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}
producer()
.then(() => {
  consumer()
})
.catch(err => {
  console.log('err', err)
})
