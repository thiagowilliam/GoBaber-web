import React from 'react';

import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';

// import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <SignUp />

      <GlobalStyles />
    </>
  );
};

export default App;
