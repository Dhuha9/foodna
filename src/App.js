import './App.scss';
import routes from './Routes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {routes}
      <Footer />
    </div>
  );
}

export default App;
