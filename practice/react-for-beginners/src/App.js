import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount( (currentCount) => currentCount + 1);
  }
  const [keyword, setKeyword] = useState("");
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log('rendered');
  useEffect(() => {
    console.log('Called API...');
  }, []);
  useEffect(() => {
    if( keyword !== '' && keyword.length > 5 ) {
      console.log('keyword changed:', keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log('count changed:', count);
  }, [count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome Back to React for Beginners! Let's learn React together! {count}
        </p>
        <input placeholder='Search here...' value={keyword} onChange={handleChange} />
        <Button onClick={handleClick} text="React First Button" />
      </header>
    </div>
  );
}

export default App;
