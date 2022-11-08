import React from 'react';
import { useAppDispatch } from '../../redux/typedRedux';
import SaveNewCardSet from '../../modules/SaveNewCardSet';
import CardSetsSelectionList from '../../modules/CardSetsSelection';

import { terminateSessionRequest } from '../../features/session/session.slice';
import { PageContainer } from './CardSetsPage.styles';
import HeaderLogo from '../../components/HeaderLogo';

const CardSetsPage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(terminateSessionRequest());

  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10px',
          alignItems: 'center',
        }}
      >
        <HeaderLogo />
        <button onClick={handleLogout}>Logout</button>
      </div>
      <SaveNewCardSet />
      <CardSetsSelectionList />
    </PageContainer>
  );
};

export default CardSetsPage;
