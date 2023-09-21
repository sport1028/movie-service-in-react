import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const changeVal = () => { setCounter( (current) => current + 1 ) };
  const changeKeyword = (event) => setKeyword(event.target.value); 

  const onlyOnce = () => { console.log("only Once!!") };
  useEffect( onlyOnce, [] );

  useEffect( () => {
    console.log("keyword changed!!!!!!!");
  },[keyword]);

  useEffect( () => {
    console.log("counter changed!!!!!!!");
  },[counter]);

  useEffect( () => {
    console.log("Both changed!!!!!!!");
  },[counter, keyword]);
  return (
    <div>
      <input type="text" value={keyword} onChange={changeKeyword}></input>
      <h1>{counter}</h1>
      <button onClick={changeVal}>Count up</button>
    </div>
  );
}


export default App;
