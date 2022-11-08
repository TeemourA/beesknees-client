import axios from '.';
import { SessionData, UserCredentials } from '../features/session/session.types';

export const createSessionAPI = async (data: UserCredentials) => {
  const response = await axios.post('/users/login', data);

  return response.data as SessionData;
};

export const terminateSessionAPI = async (_: unknown) =>
  await axios.post('/users/logout');
