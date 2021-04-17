import React, { createContext, useState } from 'react';
import './App.css';
import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const UserContext = createContext();
function App() {
  const getCurrentUser = () => JSON.parse(localStorage.getItem('currentUser'));
  const [user, setuser] = useState(getCurrentUser());

  return (
    <div>
      <UserContext.Provider value={{ refresh: setuser, user: user }}>
        <Header />
        <Routes />
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
