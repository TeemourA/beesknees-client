import { localStorageTokenName } from '../constants';

export const getBaseUrl = () => {
  if (process.env.REACT_APP_MODE === 'development')
    return process.env.REACT_APP_API_DEV_ORIGIN;

  return process.env.REACT_APP_API_PROD_ORIGIN;
};

export const getCurrentSessionToken = () => {
  const token = localStorage.getItem(localStorageTokenName);

  if (!token) return '';

  return `Bearer ${token}`;
};
