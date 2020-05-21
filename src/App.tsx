import React from 'react';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/Signup';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
