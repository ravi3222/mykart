import React from "react";
import { Route, Switch } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import "./default.scss";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              {/* <Homepage /> */}
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/register"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />

        <Route path="/register" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
