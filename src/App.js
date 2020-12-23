import "./App.css";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import Error from "./components/Error.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Switch>
    </>
  );
}

export default App;
