import logo from './logo.svg';
import './App.css';
import AvatarJsx from './components/AvatarJsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="https://www.filfre.net/wp-content/uploads/2014/04/amfv.jpg"/>
        <AvatarJsx />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button>Boton</button>
        <input />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
