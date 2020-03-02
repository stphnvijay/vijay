import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import Axios from "axios";

class PutCand extends React.Component {
  localCandidate = {
    id: "",
    adhaarId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    alternateNumber: "",
    emailId: "",
    tex: "",
    rex: "",
    primarySkills: "",
    secondarySkills: "",
    qualification: "",
    additionalEducation: "",
    expectedCtc: "",
    currentCtc: "",
    positionApplied: "",
    gender: "",
    dob: "",
    address: ""
  };
  constructor() {
    super();
    this.state = {
      candidate: this.localCandidate
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentDidMount(){
  //   let id=this.props.value
  //   Axios.get("http://localhost:8085/candidate"+id)
  // }


  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    let candidate = { ...this.state.candidate };
    candidate[name] = value;
    this.setState({ candidate });
  };

  changecheck(e){
    var a =e.target.value
  
  if (a.match(/[0-9]/)){
  // e.preventDefault();
  console.log("matched")
}else{
  console.log("invalid input");
}
  }
  
  handleSubmit = e => {
    e.preventDefault();

    let candidate = this.state.candidate;

    console.log(candidate);

    Axios.post("http://localhost:8085/candidate", candidate).then(e =>{
      console.log("posted")
      window.location.reload();
  }
    );
   // window.location.reload();
    //console.log(this.state);
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center py-4">Add Candidate</p>
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Id:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="id"
                pattern="[0-9]{,3}"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                AdhaarId:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="adhaarId"
                pattern="[0-9]{12}"
                onKeyDown={this.changecheck}
                onChange={this.handleChange}
                // required
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                FirstName:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="firstName"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                LastName:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="lastName"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                PhoneNumber:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="phoneNumber"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                AlternateNumber:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="alternateNumber"
                onChange={this.handleChange}
              />
              <br />
              
              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                EmailId:
              </label>
              <input
                type="email"
                id="defaultFormCardEmailEx"
                className="form-control"
                name="emailId"
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
              <br />


              <label
                htmlFor="defaultFormCardNumberEx"
                className="grey-text font-weight-light"
              >
                Total Experience:
              </label>
              <input
                type="number"
                id="defaultFormCardNumberEx"
                className="form-control"
                name="tex"
                onChange={this.handleChange}
              />
              <br />

              <label
                htmlFor="defaultFormCardNumberEx"
                className="grey-text font-weight-light"
              >
                Relavent Experience:
              </label>
              <input
                type="number"
                id="defaultFormCardNumberEx"
                className="form-control"
                name="rex"
                onChange={this.handleChange}
              />
              <br />


             
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Primary Skills:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="primarySkills"
                onChange={this.handleChange}
              />
              <br />

              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Secondary skills:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="secondarySkills"
                onChange={this.handleChange}
              />
              <br />



              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Qualification:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="qualification"
                onChange={this.handleChange}
              />
              <br />





              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Additional Education:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="additionalEducation"
                onChange={this.handleChange}
              />
              <br />



              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Expected Ctc:
              </label>
              <input
                type="number"
                id="defaultFormCardNameEx"
                className="form-control"
                name="expectedCtc"
                onChange={this.handleChange}
              />
              <br />

              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Current Ctc:
              </label>
              <input
                type="number"
                id="defaultFormCardNameEx"
                className="form-control"
                name="currentCtc"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Position Applied:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="positionApplied"
                onChange={this.handleChange}
              />
              <br />



              <label>
                Gender: Male{" "}
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.handleChange}
                />
              </label>
              Female{" "}
              <input
                name="gender"
                type="radio"
                value="Female"
                onChange={this.handleChange}
              />
              <br/>

             <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Dob:
              </label>
              <input
                type="Date"
                id="defaultFormCardNameEx"
                className="form-control"
                name="dob"
                onChange={this.handleChange}
              />
              <br />

              
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Address:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="address"
                onChange={this.handleChange}
              />
              <br />

              
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default PutCand;
