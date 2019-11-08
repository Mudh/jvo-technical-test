import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";

import "./App.css";
import OBJECTIVES from "./data.json";

class App extends Component {
  render() {
    const TODAY = "2018-02-20";

    const currentOvertarget = OBJECTIVES.filter(el => el.current > el.target)
      .length;

    return (
      <div className="App">
        <Header currentOvertarget={currentOvertarget} />
        <main className="App-main">
          <List objectives={OBJECTIVES} currentDate={TODAY} />
        </main>
      </div>
    );
  }
}

export default App;
