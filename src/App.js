import "./App.css";
import Home from "./components/Home";
import "./components/Home.css";
import Context from "./Context";

function App() {
  return (
    <Context>
      <div className="App">
        <Home />
      </div>
    </Context>
  );
}

export default App;
