import { Message } from "kafkajs";
import Config from "./config";
import kafka from "./kafka";



async function producer(messages: Message[]) {
    const producer = kafka.producer();

    await producer.connect();

    await producer.send({
        topic: Config.topic,
        messages
    });

    await producer.disconnect()
}

export default producer;
