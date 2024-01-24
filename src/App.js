import "./App.css";
import MyComponent from "./MyComponent";
import MyClassComponent from "./MyClassComponent";
import MyComponentWithProps from "./MyComponentWithProps";
import MyComponentWithUseEffectAndUseState1 from "./MyComponentWithUseEffectAndUseState1";
import MyComponentWithUseEffectListener from "./MyComponentWithUseEffectListener";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyClassComponent />
      <MyComponentWithProps msg="Hola desde Props" />
      <MyComponentWithUseEffectAndUseState1 />
      <MyComponentWithUseEffectListener />
    </div>
  );
}

export default App;
