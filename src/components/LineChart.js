import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineDemo extends Component {

  render() {
    console.log(this.props);
    
     
     var data = {
        labels: this.props.labels,
        datasets: [
          {
            label: this.props.label,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255,199,132,0.4)",
            borderColor: this.props.borderColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.data
          }
        ]
      };
    

    return (
      <div>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
