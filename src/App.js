import './App.css';
import routes from './Routes';
import Header from './components/Header/Header';
function App() {
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}

export default App;
