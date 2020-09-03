import React from "react";
import withRoot from "./design/withRoot";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import PetInfo from "./views/DataViz/PetInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact={true}
            path="/petInfo"
            render={props => (
              <React.Fragment>
                <PetInfo />
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default withRoot(App);
