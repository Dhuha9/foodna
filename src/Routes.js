import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import AvailableMeals from './pages/AvailableMeals/AvailableMeals';
import ContactUs from './pages/ContactUs/ContactUs';
import DonateFood from './pages/DonateFood/DonateFood';
import Main from './pages/Main/Main';
import RecieveFood from './pages/RecieveFood/RecieveFood';
import LoginModal from './components/Modal/LoginModal';
import { UserContext } from './App';

const Routes = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route path="/meals" component={AvailableMeals} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/recieve/:id">
          {userContext.user ? <RecieveFood /> : <LoginModal />}
        </Route>
        <Route path="/donate">
          {userContext.user ? <DonateFood /> : <LoginModal />}
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
