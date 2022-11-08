import { localStorageTokenName } from '../constants';

export const getBaseUrl = () => {
  if (process.env.REACT_APP_MODE !== 'development') return;

  return 'http://localhost:3000';
};

export const getCurrentSessionToken = () => {
  const token = localStorage.getItem(localStorageTokenName);

  if (!token) return '';

  return `Bearer ${token}`;
};
