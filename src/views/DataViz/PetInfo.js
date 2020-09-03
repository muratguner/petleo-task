import React, { Component } from "react";
import "../../styles/App.css";
import Service from "../../services/Service";
import LineDemo from "../../components/LineChart";
import DropdownList from "react-widgets/lib/DropdownList";
import "react-widgets/dist/css/react-widgets.css";

class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pulselabels: [],
      pulseValues: [],
      templabels: [],
      tempValues: [],
      weightlabels: [],
      weightValues: [],
    };
    this.getData = this.getData.bind(this);
    this.onDropDownChange = this.onDropDownChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.getData("");
  };

  // Gets the data to the PetInfo js file and sends it to the data parser
  async getData(value) {
    try {
      let service = new Service();
      let data = await service.getData(value);
      this.setState({ data: data });
      this.dataParser(data);
    } catch (e) {}
  }

  //Filters the data when the dropdown value changes
  onDropDownChange(value) {
    this.getData(value);
  }

// Responsible for parsing the data to be used for LineDemo Component
  dataParser(data) {
    let pulselabels = [];
    let pulseValues = [];
    let pulse = data.pulseData;

    let templabels = [];
    let tempValues = [];
    let temp = data.tempData;

    let weightlabels = [];
    let weightValues = [];
    let weight = data.weightData;

    pulse.map((entry) => {
      pulseValues.push(entry.value);
      pulselabels.push(entry.timestamp);
    });

    temp.map((entry) => {
      tempValues.push(entry.value);
      templabels.push(entry.timestamp);
    });

    weight.map((entry) => {
      weightValues.push(entry.value);
      weightlabels.push(entry.timestamp);
    });

    this.setState({ pulselabels: pulselabels });
    this.setState({ pulseValues: pulseValues });
    this.setState({ templabels: templabels });
    this.setState({ tempValues: tempValues });
    this.setState({ weightlabels: weightlabels });
    this.setState({ weightValues: weightValues });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="col-md-12" style={{ paddingTop: "20px" }}>Please select the time frame</div>
        <div className="col-md-12" style={{ paddingTop: "10px" }}>
          <DropdownList
            data={["last year", "last 6 months", "last 3 months", "last month"]}
            value={this.state.value}
            onChange={(value) => this.onDropDownChange(value)}
          />
        </div>
        <div className="col-md-12" style={{ paddingTop: "20px" }}>
          <LineDemo
            data={this.state.pulseValues}
            labels={this.state.pulselabels}
            label={"PULSE (bpm)"}
            borderColor={"rgba(255,99,132,1)"}
            height={null}
            width={null}
            options={{
              aspectRatio: 1, 
            }}
          />{" "}
        </div>
        <div className="col-md-12" style={{ paddingTop: "20px" }}>
          <LineDemo
            data={this.state.tempValues}
            labels={this.state.templabels}
            label={"TEMPERATURE (C)"}
            borderColor={"rgba(241, 196, 15,1)"}
            height={null}
            width={null}
            options={{
              aspectRatio: 1, 
            }}
          />{" "}
        </div>
        <div className="col-md-12" style={{ paddingTop: "20px", paddingBottom:"20px" }}>
          <LineDemo
            data={this.state.weightValues}
            labels={this.state.weightlabels}
            label={"WEIGHT (kg)"}
            borderColor={"rgba(39, 174, 96,1)"}
            height={null}
            width={null}
            options={{
              aspectRatio: 1, 
            }}
          />{" "}
        </div>
      </div>
    );
  }
}

export default PetInfo;
