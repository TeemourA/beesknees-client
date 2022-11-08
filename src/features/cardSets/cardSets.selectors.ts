import { RootState } from '../../redux/store';

export const cardSetsSelector = (state: RootState) => state.cardSets;

export const cardSetsListSelector = (state: RootState) =>
  cardSetsSelector(state).cardSets;

export const cardSetsStatusSelector = (state: RootState) => cardSetsSelector(state).status;
