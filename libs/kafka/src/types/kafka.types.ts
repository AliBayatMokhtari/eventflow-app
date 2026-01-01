import { KAFKA_TOPICS } from '../constants/kafka.constants';

export type KafkaTopics = typeof KAFKA_TOPICS;
export type KafkaTopic = KafkaTopics[keyof KafkaTopics];
