import React from 'react';
import { useAppDispatch, useAppSelector } from './redux/typedRedux';

import LoginPage from './pages/LoginPage';
import SaveNewCardSet from './modules/SaveNewCardSet';
import CardSetsSelectionList from './modules/CardSetsSelection';

import { terminateSessionRequest } from './features/session/session.slice';
import { sessionTokenSelector } from './features/session/session.selectors';
import { AppContainer } from './App.styles';
import HeaderLogo from './components/HeaderLogo';

const App: React.FC = () => {
  const token = useAppSelector(sessionTokenSelector);

  const dispatch = useAppDispatch();

  const handleLogout = () => dispatch(terminateSessionRequest());

  return (
    <div className="App">
      {!token ? (
        <LoginPage />
      ) : (
        <AppContainer>
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
        </AppContainer>
      )}
    </div>
  );
};

export default App;
