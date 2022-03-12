import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Common/Navigations/Navigation";
import Authenticate from "./Components/Pages/Authenticate/Authenticate";
import Activate from "./Components/Pages/Activate/Activate";
import Rooms from "./Components/Pages/Rooms/Rooms";

import "./App.css";

const isAuth = false;
const user = {
  activated: false,
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <GuestRoute path="/" exact>
            <Home />
          </GuestRoute>
          <GuestRoute path="/authenticate">
            <Authenticate />
          </GuestRoute>
          <SemiProtectedRoute path="activate">
            <Activate />
          </SemiProtectedRoute>
          <ProtectedRoute path="/rooms">
            <Rooms />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const SemiProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location.pathname },
            }}
          />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location.pathname },
            }}
          />
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location.pathname },
            }}
          />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={{
              pathname: "/activate",
              state: { from: location.pathname },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(location) => {
        // console.log("Rushi --> currentLocation ", location);
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location.pathname },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};
export default App;
