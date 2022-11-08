import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/typedRedux';

import { saveNewCardSetRequest } from '../../features/cardSets/cardSets.slice';

import {
  SaveNewCardSetForm,
  SaveNewCardSetFormButton,
  SaveNewCardSetFormButtonContainer,
  SaveNewCardSetInput,
} from './SaveNewCardSet.styles';

const SaveNewCardSet: React.FC = () => {
  const [cardSetName, setCardSetName] = useState<string>('');
  const [cardSetUrl, setCardSetUrl] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleCardSetNameChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCardSetName(value);
  };

  const handleCardSetUrlChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setCardSetUrl(value);
  };

  const handleSaveNewCardSetSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    dispatch(saveNewCardSetRequest({ title: cardSetName, url: cardSetUrl }));
  };

  return (
    <>
      <SaveNewCardSetForm onSubmit={handleSaveNewCardSetSubmit}>
        Add new cardset
        <label>
          <SaveNewCardSetInput
            type="text"
            placeholder="Cardset name"
            value={cardSetName}
            onChange={handleCardSetNameChange}
          ></SaveNewCardSetInput>
        </label>
        <label>
          <SaveNewCardSetInput
            type="text"
            placeholder="Download url"
            value={cardSetUrl}
            onChange={handleCardSetUrlChange}
          ></SaveNewCardSetInput>
        </label>
        <SaveNewCardSetFormButtonContainer>
          <SaveNewCardSetFormButton type="submit">Add</SaveNewCardSetFormButton>
        </SaveNewCardSetFormButtonContainer>
      </SaveNewCardSetForm>
    </>
  );
};

export default SaveNewCardSet;
