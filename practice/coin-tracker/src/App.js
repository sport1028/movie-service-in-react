import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Coins ({coins.length})</h1>
        <ul>
          {
            coins.length !== 0 ? coins.map( (coin) => (
              <li key={coin.key}>
                {coin.name} ({coin.symbol}: {coin.quotes.USD.price})
              </li>
            ) ) : null
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
