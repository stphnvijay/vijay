import React, { Component } from "react";
import App from "./App";
import Axios from "axios";
import GetCandList from "./GetCandList";
import PutCand from "./PutCand";
import { Link } from "react-router-dom";

class GetCandit extends React.Component {
  constructor() {
    super();
    this.state = {
      project: [],
      isTrue: false,
      isCandidate: false,
      keysList: []
      // value: []
    };
    Axios.get("http://localhost:8085/candidate").then(response =>
      this.setState({ project: response.data })
    );
    this.renderRows = this.renderRows.bind(this);
    this.renderTds = this.renderTds.bind(this);
    this.deleteRow=this.deleteRow.bind(this)
  }

  funcKeys = () => {
    this.setState({
      keysList: Object.keys(this.state.project[1]),
      isTrue: !this.state.isTrue
    });
  };

  renderTds = project1 => {
    console.log(project1["firstName"]);
    var keys = Object.keys(project1);
    const tds = keys.map(
      dat => <td key={dat}>{project1[`${dat}`]}</td>
      //console.log(project1[`${dat}`])
    );
    return tds;
  };

  renderRows = () => {
    const trs = this.state.project.map(e => (
      <tr key={e.id}>{this.renderTds(e)}
      <td><button value={e.id} name="id" onClick={this.deleteRow}>Delete</button></td>
      <td><Link to={"/UpdateCand"}></Link><button >Update</button></td>
      </tr>
  
    ));

    return trs;
  };

  deleteRow=event =>{
    const id=event.target.value;
    console.log(id);
    Axios.delete("http://localhost:8085/candidate/"+id).then(
      (res)=>console.log("deleted",res)),
      this.props.history.push("/");

  }

  addCand = () => {
    this.setState({
      isCandidate: !this.state.isCandidate
    });
  };

  render() {
    const { isTrue, isCandidate } = this.state;
    //let keys1=Object.keys(this.state.project[1])
    // let value=this.state.project
    return (
      <div className="App">
        <h1>Candidates</h1>
        <div className="row">
          <div className="col-lg-6">
            <button className="button" onClick={this.funcKeys}>
              View Candidates
            </button>
          </div>
          <div className="col-lg-6">
            <button className="button" onClick={this.addCand}>
              Add Candidate
            </button>
          </div>
        </div>
        {isTrue ? (
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-hover table-striped" border="2px">
                <GetCandList keydata={this.state.keysList} />
                <tbody key="body">{this.renderRows()}</tbody>
              </table>
            </div>
          </div>
        ) : null}
        {isCandidate ? <PutCand /> : null}
      </div>
    );
  }
}
export default GetCandit;
