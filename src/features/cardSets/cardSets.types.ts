import { RequestStatuses } from '../../interface/network';

export interface CardSetData {
  title: string;
  url: string;
  price: string;
}

export interface CardSet extends CardSetData {
  _id: string;
}

export interface CardSetsState {
  cardSets: CardSet[];
  status: RequestStatuses | string;
}
