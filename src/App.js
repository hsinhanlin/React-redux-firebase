import React, { Component } from "react";
import { BrowserRouter } from "react-reouter-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <p>app.js</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
