import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer
} from "mdbreact";
import GetCandit from "./GetCand";
import GetCandList from "./GetCandList";
import GetCand from "./GetCand";

class Navbar extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <Link to="/home" className="navbar-brand">
      <div>    Home</div>
      //   </Link>
      //   <Link to="/Candidate" className="navbar-brand">
      //     Candidate
      //   </Link>
      //   <Link to="/Interview" className="navbar-brand">
      //     Interview
      //   </Link>
      //   <Link to="/viewCandidate" className="navbar-brand">
      //     viewCandidate
      //   </Link>
      //   <Link to="/viewInterview" className="navbar-brand">
      //     viewInterview
      //   </Link>
      // </nav>
    )
  }
}
export default Navbar;
