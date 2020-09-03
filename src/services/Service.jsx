export default class Service {

  //Responsible for getting the data from the API
  async getData(value) {
    try {
      let queryString =
        " https://run.mocky.io/v3/7970855d-c5da-429f-a923-8637969ae865";

      const response = await fetch(queryString);
      const json = await response.json();
      const data = this.constructDataArray(json, value);
      return data;
    } catch (e) {}
  }

  //Responsible for filtering the data and constructing an object array 
  constructDataArray(json, value) {
    let tempData = [];
    let pulseData = [];
    let weightData = [];

    json.map((entry) => {
      var msDiff = new Date().getTime() - new Date(entry.timestamp).getTime();
      var diff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
      if (value === "last year") {
        if (diff <= 365) {
          if (entry.type === "WEIGHT") {
            tempData.push(entry);
          }
          if (entry.type === "PULSE") {
            pulseData.push(entry);
          }
          if (entry.type === "TEMPERATURE") {
            weightData.push(entry);
          }
        }
      } else if (value === "last 6 months") {
        if (diff <= 180) {
          if (entry.type === "WEIGHT") {
            tempData.push(entry);
          }
          if (entry.type === "PULSE") {
            pulseData.push(entry);
          }
          if (entry.type === "TEMPERATURE") {
            weightData.push(entry);
          }
        }
      } else if (value === "last 3 months") {
        if (diff <= 90) {
          if (entry.type === "WEIGHT") {
            tempData.push(entry);
          }
          if (entry.type === "PULSE") {
            pulseData.push(entry);
          }
          if (entry.type === "TEMPERATURE") {
            weightData.push(entry);
          }
        }
      } else if (value === "last month") {
        if (diff <= 30) {
          if (entry.type === "WEIGHT") {
            tempData.push(entry);
          }
          if (entry.type === "PULSE") {
            pulseData.push(entry);
          }
          if (entry.type === "TEMPERATURE") {
            weightData.push(entry);
          }
        }
      } else {
        if (entry.type === "WEIGHT") {
          tempData.push(entry);
        }
        if (entry.type === "PULSE") {
          pulseData.push(entry);
        }
        if (entry.type === "TEMPERATURE") {
          weightData.push(entry);
        }
      }
    });

    const objectArray = { tempData, pulseData, weightData };
    return objectArray;
  }
}
