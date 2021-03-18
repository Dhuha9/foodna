import './App.css';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About/About';
import AvailableMeals from './pages/AvailableMeals/AvailableMeals';
import ContactUs from './pages/ContactUs/ContactUs';
import DonateFood from './pages/DonateFood/DonateFood';
import Main from './pages/Main/Main';
import RecieveFood from './pages/RecieveFood/RecieveFood';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route path="/meals" component={AvailableMeals} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/donate" component={DonateFood} />
        <Route path="/recieve/:id" component={RecieveFood} />
      </Switch>
    </div>
  );
}

export default App;
