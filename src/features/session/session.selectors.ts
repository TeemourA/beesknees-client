import { RootState } from '../../redux/store';

export const sessionSelector = (state: RootState) => state.session;

export const sessionTokenSelector = (state: RootState) =>
  sessionSelector(state).token;

export const sessionStatusSelector = (state: RootState) =>
  sessionSelector(state).status;
