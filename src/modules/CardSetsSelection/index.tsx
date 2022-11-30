import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/typedRedux';

import { fetchCardSetsRequest } from '../../features/cardSets/cardSets.slice';
import {
  cardSetsListSelector,
  cardSetsStatusSelector,
} from '../../features/cardSets/cardSets.selectors';

import { CardSet } from '../../features/cardSets/cardSets.types';

import { RequestStatuses } from '../../interface/network';
import {
  CardSetsSelectionButton,
  CardSetsSelectionList,
} from './CardSetsSelection.styles';

const CardSetsSelection: React.FC<any> = () => {
  const [selectedCardSets, setSelectedCardSets] = useState<CardSet[]>([]);
  const [message, setMessage] = useState<string>('');
  const [searchedSet, setSearchedSet] = useState<string>('');

  const cardSets = useAppSelector(cardSetsListSelector);
  const searchedCardSets = useAppSelector(cardSetsListSelector).filter(
    ({ title }) => title.toLowerCase().includes(searchedSet)
  );
  const status = useAppSelector(cardSetsStatusSelector);

  const dispatch = useAppDispatch();

  const handleCardSetSelect = (cardSet: CardSet) => {
    setSelectedCardSets((prevSelectedCardSets) => {
      if (!prevSelectedCardSets.includes(cardSet))
        return [...prevSelectedCardSets, cardSet];

      return [
        ...prevSelectedCardSets.filter(
          (currentCardSet) => currentCardSet !== cardSet
        ),
      ];
    });
  };

  const handleSelectAllCardSets = () => {
    const isNotAllSelected = selectedCardSets.length < cardSets.length;

    if (isNotAllSelected) {
      const notSelected = cardSets.filter(
        (set) => !selectedCardSets.includes(set)
      );
      notSelected.forEach((set) => handleCardSetSelect(set));
    } else {
      cardSets.forEach((set) => handleCardSetSelect(set));
    }
  };
  const handleSearchedSetChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedSet(value.toLowerCase().trim());
  };

  const selectedCardSetsTotalPrice = useMemo(
    () =>
      selectedCardSets.reduce(
        (sum, { price }) => (price ? sum + Number(price) : sum),
        0
      ),
    [selectedCardSets]
  );

  useEffect(() => {
    setMessage(
      `${selectedCardSets
        .map((selectedSet) => `${selectedSet.title}\n${selectedSet.url}\n\n`)
        .join('')}`
    );
  }, [selectedCardSets]);

  useEffect(() => {
    dispatch(fetchCardSetsRequest());
  }, [dispatch]);

  if (!cardSets.length && status === RequestStatuses.loaded)
    return <div>No card sets found</div>;

  return (
    <>
      {status === RequestStatuses.loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <p>Available card sets</p>
          <input
            type="text"
            value={searchedSet}
            placeholder="Search set"
            onChange={handleSearchedSetChange}
            style={{ marginTop: '15px', marginBottom: '15px' }}
          />
          <CardSetsSelectionButton
            onClick={handleSelectAllCardSets}
            style={{ marginBottom: '15px' }}
          >
            Select all
          </CardSetsSelectionButton>
          <CardSetsSelectionList>
            {searchedCardSets.map((set) => (
              <li key={set._id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCardSetSelect(set)}
                    checked={selectedCardSets.includes(set)}
                  />
                  <a href={set.url} rel="noreferrer" target="_blank">
                    {set.title}
                  </a>
                  {' | '}
                  <span>{set?.price}₽</span>
                </label>
              </li>
            ))}
          </CardSetsSelectionList>
        </>
      )}
      {!selectedCardSets.length ? (
        <p>Select a card set to generate a message</p>
      ) : (
        <div style={{ marginTop: '10px' }}>
          <div>Total for selected sets: {selectedCardSetsTotalPrice}₽</div>
          <textarea cols={40} rows={10} value={message} />
          <button onClick={() => navigator.clipboard.writeText(message.trim())}>
            Copy to clipboard
          </button>
        </div>
      )}
    </>
  );
};

export default CardSetsSelection;
