import React from 'react';
import { useAppSelector } from './redux/typedRedux';

import LoginPage from './pages/LoginPage';
import CardSetsPage from './pages/CardSetsPage';

import { sessionTokenSelector } from './features/session/session.selectors';

const App: React.FC = () => {
  const token = useAppSelector(sessionTokenSelector);

  return <div className="App">{!token ? <LoginPage /> : <CardSetsPage />}</div>;
};

export default App;
