import React from "react";

class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Estado Inicial" };
  }

  changeState = () => {
    this.setState({ msg: "Estado Alterado" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeState}>Cambiar Estado</button>
      </div>
    );
  }
}

export default MyClassComponent;
