import "./App.css";
import PlanLayout from "./PlanLayout";
import Welcome from "./Welcome";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import PhoneConfirmation from "./PhoneConfirmation";
import CodeConfirm from "./CodeConfirm";
import AllowNotification from "./AllowNotification";
import AppLayout from "./AppLayout";
import Home from "./Home";
import Explore from "./Explore";
import Profile from "./Profile";
import Activity from "./Activity";
import upComing from "./upComing";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={[
          "/",
          "/invite",
          "/get_username",
          "/code_confirm",
          "/allow_notification",
        ]}
      >
        <PlanLayout>
          <Switch>
            <Route exact path={"/"} component={Welcome}></Route>
            <Route exact path={"/invite"} component={PhoneConfirmation}></Route>
            <Route exact path={"/code_confirm"} component={CodeConfirm}></Route>
            <Route
              exact
              path={"/allow_notification"}
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>
      <Route
        exact
        path={["/home", "/explore", "/profile", "/activity", "/upcoming"]}
      >
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/activity" component={Activity} />
            <Route exact path="/upcoming" component={upComing} />
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
