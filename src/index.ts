import producer from "./producer";
import consumer from './consumer';


async function start() {
    await producer([
        {value: 'Hello'},
        {value: ','},
        {value: 'I\'m'},
        {value: 'kafkajs'}
    ])

    await consumer({
        groupId: 'consumer-1'
    })

    await consumer({
        groupId: 'consumer-2'
    })
}

start()
.catch(console.log)