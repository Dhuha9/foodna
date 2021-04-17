import React, { createContext, useState, Suspense } from 'react';
import './App.css';
import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const UserContext = createContext();

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  const getCurrentUser = () => JSON.parse(localStorage.getItem('currentUser'));
  const [user, setuser] = useState(getCurrentUser());

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <UserContext.Provider value={{ refresh: setuser, user: user }}>
          <Header />
          <Routes />
        </UserContext.Provider>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
