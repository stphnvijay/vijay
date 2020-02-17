import React from 'react';
import { Link,Switch,Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";
import GetCandit from './GetCand';
import GetCandList from './GetCandList';
import GetCand from './GetCand';


class Navbar extends React.Component{
    render(){
return (
  <Router>
    <MDBContainer>
        <MDBNavbar color="red" dark expand="md" style={{ marginTop: "20px" }}></MDBNavbar>
        <MDBNavItem active>
              <Link to="GetCand">Candidate</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="GetCandList">Interview</Link>
            </MDBNavItem>
</MDBContainer>
</Router>

  )
}
}
export default Navbar