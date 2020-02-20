import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

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
      console.log(e)
    )
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <label>CandidateId:
              <input
                type="text"
                name="candidate_id"
                onChange={this.handleChange}
              />
              </label>
              <label>ModeOfInterview:
              <input
                type="text"
                name="modeOfInterview"
                onChange={this.handleChange}
              />
              </label>
              <label>dob:
              <input type="text" name="dob" onChange={this.handleChange} />
              </label>
              <label>location:
              <input type="text" name="location" onChange={this.handleChange} />
              </label>
              <label>recommondation:
              <input
                type="text"
                name="recommondation"
                onChange={this.handleChange}
              />
              </label>
              <label>interviewPanel:
              <input
                type="text"
                name="interviewPanel"
                onChange={this.handleChange}
              />
              </label>
              <label>reference:
              <input
                type="text"
                name="reference"
                onChange={this.handleChange}
              />
              </label>
              <label>Submit:
              <input type="submit" value="submit" />
                </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PutInter
