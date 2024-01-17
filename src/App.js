import "./App.css";
import MyComponent from "./MyComponent";
import MyClassComponent from "./MyClassComponent";
import MyComponentWithProps from "./MyComponentWithProps";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyClassComponent />
      <MyComponentWithProps msg="Hola desde Props" />
    </div>
  );
}

export default App;
