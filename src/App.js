import logo from './logo.svg';
import manga from './img/manga1.png';
import Cabecera from './cabecera';
import Boton from './boton';
import './App.css';

function App() {
  return (
    <div className="App">
      < header className="App-header">
        
      <Cabecera/>
        <img src={logo} className="App-logo" alt="logo" />
       
        
        <Boton/>
      <img src={manga} className="manga" alt="Img manga" />
      </header>
    </div>

  );
}

export default App;
