import type { TOPIC_NAMES } from "../constants/topicNames";

export type TopicId = typeof TOPIC_NAMES[keyof typeof TOPIC_NAMES]
