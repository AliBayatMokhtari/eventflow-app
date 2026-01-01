export const KAFKA_SERVICE = 'KAFKA_SERVICE';

export const KAFKA_CLIENT_ID = 'eventflowapp';
export const KAFKA_CONSUMER_GROUP = 'eventflowapp-consumer';
export const KAFKA_BROKER = process.env.KAFKA_BROKER || 'localhost:9092';

export const KAFKA_TOPICS = {
  // Auth events
  USER_LOGIN: 'user.login',
  USER_REGISTERED: 'user.registered',
  PASSWORD_RESET_REQUESTED: 'user.password-reset-requested',

  // Event events
  EVENT_CREATED: 'event.created',
  EVENT_UPDATED: 'event.updated',
  EVENT_CANCELLED: 'event.cancelled',

  // Ticket events
  TICKET_PURCHASED: 'ticket.purchased',
  TICKET_CANCELLED: 'ticket.cancelled',
  TICKET_CHECKED_IN: 'ticket.checked-in',

  // PAYMENT events
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_REFUNDED: 'payment.refunded',
  PAYMENT_COMPLETED: 'payment.completed',

  // NOTIFICATION events
  SEND_PUSH: 'notification.send-push',
  SEND_EMAIL: 'notification.send-email',
} as const;
