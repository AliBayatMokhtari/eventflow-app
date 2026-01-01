import { users } from '../schemas';

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
