import { RequestStatuses } from '../../interface/network';

export interface UserCredentials {
  email: string;
  password: string;
}

export interface User extends UserCredentials {
  _id: string;
}

export interface SessionData {
  user: User;
  token: string;
}

export interface SessionState {
  user: null;
  token: string | null;
  status: RequestStatuses;
}
