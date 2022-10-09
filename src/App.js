/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: "Igor",
        lastName: "Levirov",
      },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>

          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <p>
            Hello, my name is {this.state.name.firstName} {this.state.name.lastName}, i work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  return {
                    name: {
                      firstName: "Egor",
                      lastName: "Samoylov",
                    },
                  };
                },
                () => {
                  console.log(this.state);
                },
              );
              // console.log(this.state);
            }}
          >
            Change name df
          </button>
        </header>
      </div>
    );
  }
}

export default App;
