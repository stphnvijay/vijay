import React, { Component } from "react";
import "./App.css";
import PutInter from "./PutInter";
import axios from "axios";
import GetCand from "./GetCand";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GetCandList from "./GetCandList";
import PutCand from "./PutCand";
import Home from "./Home";
import Sample from "./Sample";
import UpdateCand from "./UpdateCand";
import GetInt from "./GetInt";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/GetCand"} className="nav-link">
                  Candidates
                </Link>
              </li>
              <li>
                <Link to={"/PutCand"} className="nav-link">
                  Interview
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/GetCand" component={GetCand} />
            <Route path="/PutCand" component={PutInter} />
            <Route path="/UpdateCand" component={UpdateCand}/>
          </Switch>
        </div>
      </Router>
    );

    //   // <div className="App">
    //      {/* <GetCand/>  */}
    //      {/* <PutCand/>  */}
    //      {/* <Sample/> */}
    //      {/* <PutInter/> */}

    //   // </div>
    // )

    // return (
    //   <Navbar>
    //   <Router>
    // <Switch>
    //   <Route path="/GetCand" component={GetCand} />
    //   <Route path="/GetCandList" component={GetCandList} />
    // </Switch>
    // </Router>
    //   </Navbar>

    // );
  }
}

export default App;
