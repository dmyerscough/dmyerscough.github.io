import { HashRouter, Route } from "react-router-dom";

import { NavBar } from "./navbar";
import { Home } from "./home";
import { CreateAccount } from "./createaccount";
import { Login } from "./login";
import { Deposit } from "./deposit";
import { Withdraw } from "./withdraw";
import { Balance } from "./balance";
import { AllData } from "./alldata";

import { UserContext } from "./context";

function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: [] }}>
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default Spa;
