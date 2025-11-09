import "./App.css";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

function App() {
  return (
    <div className="app">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-container">
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;
