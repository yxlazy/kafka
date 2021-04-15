import kafka from "./kafka";
import Config from "./config";
import { ConsumerConfig, EachMessagePayload } from "kafkajs";

async function consumer(config: ConsumerConfig) {
    const consumer = kafka.consumer(config);

    await consumer.connect()
    await consumer.subscribe({
        topic: Config.topic,
        fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({topic, partition, message}: EachMessagePayload): Promise<void> => {
            console.log({
                value: message.value.toString(),
                topic,
                partition
            })
        }
    })
}

export default consumer;

