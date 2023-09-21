import Button from "./Button";
import AppStyle from "./App.Module.css";

function App() {
  return (
    <div>
      <h1>Welcome back!!</h1>
      <span className={AppStyle.title}>Welcome back!!</span>
      <Button text={"continue"}/>
    </div>
  );
}


export default App;
