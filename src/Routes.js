import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import AvailableMeals from './pages/AvailableMeals/AvailableMeals';
import ContactUs from './pages/ContactUs/ContactUs';
import DonateFood from './pages/DonateFood/DonateFood';
import Main from './pages/Main/Main';
import RecieveFood from './pages/RecieveFood/RecieveFood';
import LoginModal from './components/Modal/LoginModal';
import Header from './components/Header/Header';

const Routes = () => {
  const getCurrentUser = () => JSON.parse(localStorage.getItem('currentUser'));

  const [user, setuser] = useState(getCurrentUser());

  const handleUserChange = () => {
    console.log('in route', getCurrentUser());
    setuser(getCurrentUser());
  };

  return (
    <>
      <Header handleUserChange={handleUserChange} user2={user} />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route path="/meals" component={AvailableMeals} />
        <Route path="/contact" component={ContactUs} />
        {/* <Route path="/donate" component={DonateFood} /> */}
        <Route path="/recieve/:id" component={RecieveFood} />
        <Route path="/donate">
          {user ? (
            <DonateFood />
          ) : (
            <LoginModal handleUserChange={handleUserChange} />
          )}
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
