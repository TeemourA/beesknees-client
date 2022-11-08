import axios from '.';
import { CardSet, CardSetData } from '../features/cardSets/cardSets.types';

export const saveNewCardSetAPI = async (data: CardSetData) => {
  const response = await axios.post('/sets', data);

  return response.data as CardSet;
};

export const cardSetsFetchAPI = async () => {
  const response = await axios.get('/sets');

  return response.data as CardSet[];
};