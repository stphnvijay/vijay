import React, { Component } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

class UpdateCand extends React.Component {
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
      candidate: this.localCandidate,
      render: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Axios.get(
      "http://localhost:8085/candidate/" + this.props.match.params.val
    ).then(response => this.setState({ candidate: response.data ,
    render:true}));
    console.log(this.state.candidate);
    
    // setTimeout(
    //   function() {
    //     //Start the timer
    //     this.setState({ render: true }); //After 1 second, set render to true
    //   }.bind(this),
    //   1000
    // );
  }

  handleChange = event => {
    console.log(this.state.candidate);
    let name = event.target.name;
    let value = event.target.value;
    console.log(this.props.match.params.val);

    let candidate = { ...this.state.candidate };
    candidate[name] = value;
    this.setState({ candidate });
  };

  handleSubmit = e => {
    e.preventDefault();

    let candidate = this.state.candidate;

    console.log(candidate);

    Axios.put("http://localhost:8085/candidate", candidate).then(e =>
      console.log("posted")
    );
    //console.log(this.state);
    //window.location.reload();
  };

  render() {
    const { render } = this.state;
    if(render){
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center py-4">Update Candidate</p>
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
                value={this.state.candidate.id}
                disabled={true}
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
                value={this.state.candidate.adhaarId}
                onChange={this.handleChange}
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
                value={this.state.candidate.firstName}
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
                value={this.state.candidate.lastName}
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
                value={this.state.candidate.phoneNumber}
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
                value={this.state.candidate.alternateNumber}
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
                type="text"
                id="defaultFormCardEmailEx"
                className="form-control"
                name="emailId"
                value={this.state.candidate.emailId}
                onChange={this.handleChange}
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
                value={this.state.candidate.tex}
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
                value={this.state.candidate.rex}
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
                value={this.state.candidate.primarySkills}
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
                value={this.state.candidate.secondarySkills}
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
                value={this.state.candidate.qualification}
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
                value={this.state.candidate.additionalEducation}
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
                value={this.state.candidate.expectedCtc}
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
                value={this.state.candidate.currentCtc}
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
                value={this.state.candidate.positionApplied}
                onChange={this.handleChange}
              />
              <br />


              <RadioGroup aria-label="gender" name="gender" value={this.state.candidate.gender} onChange={this.handleChange}>
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
            labelPlacement="start"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
            labelPlacement="start"
          />
          </RadioGroup>





              {/* <label>
                Gender: Male{" "}
                <input
                  type="radio"
                  name="gender"
                  label="Male"
                  value="Male"
                  onChange={this.handleChange}
                />
              </label>
              Female{" "}
              <input
                name="gender"
                type="radio"
                value="Female"
                label="Female"
                onChange={this.handleChange}
              /> */}
              <br/>
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Dob:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="dob"
                value={this.state.candidate.dob}
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
                value={this.state.candidate.address}
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
      </MDBContainer>)}
      else{
        return(<div>loading...,</div>);
      }
    
  }
}
export default UpdateCand;
