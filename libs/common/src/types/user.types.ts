import { USER_ROLES } from '../constants';

export type UserRoles = typeof USER_ROLES;
export type UserRole = UserRoles[keyof UserRoles];
