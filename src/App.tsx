import React from 'react';

import GlobalStyles from './styles/global';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <SignUp />
    </>
  );
};

export default App;
