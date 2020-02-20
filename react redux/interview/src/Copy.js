import React, { Component }  from "react";
import "bootstrap/dist/css/bootstrap.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Axios from 'axios';

class PutCand1 extends React.Component {
  localCandidate={
    id: '',
    adhaarId: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    alternateNumber: '',
    emailId: '',
    tex: '',
    rex: '',
    primarySkills: '',
    secondarySkills: '',
    qualification: '',
    additionalEducation: '',
    expectedCtc: '',
    currentCtc: '',
    positionApplied: '',
    gender: '',
    dob: '',
    address: ''
  };
  constructor() {
    super();
    this.state={
     candidate:this.localCandidate
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = event => {
    let name=event.target.name;
    let value=event.target.value;

     let candidate={...this.state.candidate}
     candidate[name]=value;
     this.setState({candidate});
      
    };


  handleSubmit = e => {
    e.preventDefault();
   
    let candidate=this.state.candidate;
      
      console.log(candidate);
    
    Axios.post("http://localhost:8085/candidate",candidate)
      .then(e => console.log("posted"))
      //console.log(this.state);
    
      }
  

  render() {
    // const {
    //     id,
    //     adhaarId,
    //     firstName,
    //     lastName,
    //     phoneNumber,
    //     alternateNumber,
    //     emailId,
    //     tex,
    //     rex,
    //     primarySkills,
    //     secondarySkills,
    //     qualification,
    //     additionalEducation,
    //     expectedCtc,
    //     currentCtc,
    //     positionApplied,
    //     gender,
    //     dob,
    //     address
    //   } = this.state;
    return (
      <div className="container">
        <h1>{this.state.firstName}</h1>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
            <p className="h4 text-center mb-4">Add Candidate</p>
              <label>
                Id:
                <input type="text" name="id"   onChange={this.handleChange} />
              </label>
              <label>
                AdhaarId:
                <input type="text" name="adhaarId" value={this.state.adhaarId} onChange={this.handleChange} />
              </label>
              <label>
                FirstName:
                <input type="text" name="firstName" onChange={this.handleChange} />
              </label>
              <label>
                LastName:
                <input type="text" name="lastName" onChange={this.handleChange} />
              </label>
              <label>
                PhoneNumber:
                <input type="text" name="phoneNumber" onChange={this.handleChange} />
              </label>
              <label>
                AlternateNumber:
                <input type="text" name="alternateNumber" onChange={this.handleChange} />
              </label>
              <label>
                EmailId:
                <input type="email" name="emailId" onChange={this.handleChange} />
              </label>
              <label>
                TotalExperience:
                <input type="number" name="tex" onChange={this.handleChange} />
              </label>
              <label>
                RelaventExperience:
                <input type="number" name="rex" onChange={this.handleChange} />
              </label>
              <label>
                PrimarySkills:
                <input type="text" name="primarySkills" onChange={this.handleChange} />
              </label>
              <label>
                SecondarySkills:
                <input type="text" name="secondarySkills"  onChange={this.handleChange} />
              </label>
              <label>
                Qualification:
                <input type="text" name="qualification" onChange={this.handleChange} />
              </label>
              <label>
                AdditionalEducation:
                <input type="text" name="additionalEducation" onChange={this.handleChange} />
              </label>
              <label>
                ExpectedCtc:
                <input type="number" name="expectedCtc"  onChange={this.handleChange} />
              </label>
              <label>
                CurrentCtc:
                <input type="number" name="currentCtc" onChange={this.handleChange} />
              </label>
              <label>
                PositionApplied:
                <input type="text" name="positionApplied" onChange={this.handleChange} />
              </label>
              <label>
                Gender: Male{" "}
                <input type="radio" name="gender" value="Male" onChange={this.handleChange} />
                </label>
                
                Female{" "}
                <input
                  name="gender"
                  type="radio"
                  value="Female"
                  onChange={this.handleChange}
                />
                
                <label>
                  DOB:
                  <input type="text" name="dob" onChange={this.handleChange}/>
                </label>
                <label>
                  Address:
                  <input type="text" name="address" onChange={this.handleChange}/>
                </label>
                <input type="submit" name="submit"/>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}
//export default PutCand;
