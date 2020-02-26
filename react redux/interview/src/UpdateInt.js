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


class UpdateInt extends React.Component {
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
  componentDidMount(){
      Axios.get("http://localhost:8085/interview/"+this.props.match.params.val).then(response =>this.setState({
          Interview:response.data
      }))
      console.log(this.state.Interview)
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
    Axios.put("http://localhost:8085/interview", interview).then((e) =>
      console.log(e)
    )
    window.location.reload();
  };

  render() {
    return (
     <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center py-4">Update Interview</p>
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
                value={this.state.Interview.candidate_id}
                disabled={true}
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
                value={this.state.Interview.modeOfInterview}
                onChange={this.handleChange}
              />
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
                onChange={this.handleChange}
                value={this.state.Interview.dob}
              />
              <br />

             <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Location:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="location"
                onChange={this.handleChange}
                value={this.state.Interview.location}
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
                value={this.state.Interview.recommondation}
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
                value={this.state.Interview.interviewPanel}
              />
              <br />

            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Reference:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="reference"
                onChange={this.handleChange}
                value={this.state.Interview.reference}
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
export default UpdateInt
