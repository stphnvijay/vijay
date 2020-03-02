import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

class PutInter extends React.Component {
  localInterview = {
    candidate_id: "",
    modeOfInterview: "",
    dob: "",
    location: "",
    recommondation: "",
    interviewPanel: "",
    reference: ""
  };
  constructor() {
    super();
    this.state = {
      Interview: this.localInterview
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChange = (e)=> {
    let name = e.target.name;
    let value = e.target.value;
    let Interview = {...this.state.Interview};
    Interview[name] = value;
    this.setState({
      Interview
    });
  };

  handleSubmit = (e) => {
      e.preventDefault();
   let interview=this.state.Interview
   console.log(interview)
    Axios.post("http://localhost:8085/interview", interview).then((e) =>
      console.log("posted")
    )
  //  window.location.reload();
  };

  render() {
    return (
     <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center py-4">Add Interview</p>
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Candidate_id:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="candidate_id"
                onChange={this.handleChange}
              />
              <br />

            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                ModeOfInterview:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="modeOfInterview"
                onChange={this.handleChange}
              />
              <br />

              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Date:
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
                Location:
              </label>
              <input
                type="Location"
                id="defaultFormCardNameEx"
                className="form-control"
                name="location"
                onChange={this.handleChange}
              />
              <br />

              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Recommondation:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="recommondation"
                onChange={this.handleChange}
              />
              <br />

              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                InterviewPanel:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="interviewPanel"
                onChange={this.handleChange}
              />
              <br />

            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Status:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="reference"
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
export default PutInter
