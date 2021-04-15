import { Kafka } from "kafkajs";
import Config from "./config";

const kafka = new Kafka({
    clientId: 'kafkajs',
    brokers: Config.brokers
});

export default kafka;
