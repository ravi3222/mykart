import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";

//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import useAuthListener from "./hooks/use-auth-listener";
import "./default.scss";

function App() {
  const { user } = useAuthListener();
  const authUser = localStorage.getItem("authUser");
  console.log("AuthUSER", authUser);

  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout user={user}>
              {/* <Homepage /> */}
              <Homepage />
            </HomepageLayout>
          )}
        />

        <Route
          path="/register"
          render={() =>
            user ? (
              <Redirect to="/" />
            ) : (
              <MainLayout user={user}>
                <Registration />
              </MainLayout>
            )
          }
        />

        <Route
          path="/login"
          render={() =>
            user ? (
              <Redirect to="/" />
            ) : (
              <MainLayout user={user}>
                <Login />
              </MainLayout>
            )
          }
        />

        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
