import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import "./styles/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      mail: "",
      phone: "",
      school: "",
      degree: "",
      d1: "",
      d2: "",
      position: "",
      company: "",
      job: "",
      d3: "",
      d4: "",
    };
  }

  updateData = (id, newValue) => {
    this.setState({
      [id]: newValue,
    });
  };

  logData = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <header>
          <h1>CV Creator</h1>
          <div className="push-right">© Yosua Nicolaus 2022</div>
        </header>
        <div className="content">
          <main>
            <General updateData={this.updateData} />
            <Education updateData={this.updateData} />
            <Experience updateData={this.updateData} />
            <div className="btns">
              <button onClick={this.logData}>Log data</button>
              <button onClick={this.logData}>Print CV</button>
            </div>
          </main>
          <nav>
            <h2>Instructions</h2>
            <div>
              Fill the inputs you deem necessary. No input is obligatory. After
              you're done with the input, click on 'Log data' button to log your
              data on your console (press F12 and go to the console tab to see
              your output) or 'Print CV' button to print your data.
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
