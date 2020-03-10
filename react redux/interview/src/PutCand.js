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
import swal from "sweetalert";

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
    var nowDate=new Date();
    var presentDate=new Date(candidate.dob);
    var age=nowDate.getFullYear()-presentDate.getFullYear();
    console.log(age)
    if(age<18){
      swal("Invalid Date the age should be minimum 18 years");
    }else{

    console.log(candidate);

    Axios.post("http://localhost:8085/candidate", candidate).then(e =>{
      console.log("posted")
      window.location.reload();
  }
    );
   // window.location.reload();
    //console.log(this.state);
  };
}

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
                pattern="[0-9]{1,3}"
                onChange={this.handleChange}
                placeholder="Id"
                title="Enter Max 3 digit number"
                 required
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
                placeholder="Adhaar Id"
                title="Enter 12 Digit Adhaar number"
                 required
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
                placeholder="First name"
                title="Enter First name"
                pattern="[a-zA-Z]{1,15}"
                required
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
                placeholder="Last name"
                title="Enter Last name"
                pattern="[a-zA-Z]{1,15}"
                required
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
                placeholder="Phone number"
                pattern="[0-9]{10}"
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
                placeholder="Alternate number"
                pattern="[0-9]{10}"
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
                placeholder="Total experience"
                pattern="[0-9]{1,2}"
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
                placeholder="Relavent experience"
                pattern="[0-9]{1,2}"
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
                placeholder="Primary skills"
                pattern="[a-zA-Z0-9]{1,20}"
                required
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
                placeholder="Secondary skills"
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
                placeholder="Qualification"
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
                placeholder="Additional education"
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
                placeholder="Expected ctc"
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
                placeholder="Current Ctc"
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
                pattern="^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$"
                placeholder="Position applied"
                required
              />
              <br />



              <label>
                Gender: Male{" "}
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.handleChange}
                  placeholder="Male"
                />
              </label>
              Female{" "}
              <input
                name="gender"
                type="radio"
                value="Female"
                onChange={this.handleChange}
                placeholder="Female"
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
                placeholder="DOB"
                
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
                placeholder="Address"
              />
              <br />

              
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit">
                  Submit
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
