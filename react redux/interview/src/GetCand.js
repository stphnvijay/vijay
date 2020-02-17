import React, { Component } from "react";
import App from "./App";
import Axios from "axios";
import GetCandList from "./GetCandList";

class GetCandit extends React.Component {
  constructor() {
    super();
    this.state = {
      project: [],
      isTrue: false,
      keysList: []
      // value: []
    };
    Axios.get("http://localhost:8085/candidate").then(response =>
      this.setState({ project: response.data })
    );
    this.renderRows=this.renderRows.bind(this)
    this.renderTds=this.renderTds.bind(this)
  }

  // componentDidMount(){
  //   this.setState({
  //     keysList:Object.keys(this.state.project[1])
  //   })
  //   console.log(this.state.keysList)

  // }

  funcKeys = () => {
    this.setState({
      keysList: Object.keys(this.state.project[1]),
      isTrue: !this.state.isTrue
    });
    // console.log(this.state.keysList);
    // console.log(this.state.isTrue);
  };

 renderTds=(project1)=>{
   console.log(project1['firstName'])
   var keys=Object.keys(project1)
const tds=keys.map((dat)=>

 <td key={dat}>{project1[`${dat}`]}</td>
//console.log(project1[`${dat}`])

)
return tds
 }

  renderRows= () =>{
    const trs=this.state.project.map((e)=>(<tr key={e.id}>{this.renderTds(e)}</tr>))
    
      return trs;
      
    };





  render() {
    const { isTrue } = this.state;
    //let keys1=Object.keys(this.state.project[1])
    // let value=this.state.project
    return (
      <div className="App">
        <h1>Get list of candidates</h1>
        <button className="button" onClick={this.funcKeys}>
          Get
        </button>
        {isTrue ? (
          <div className="row">
            <div className="col-lg-12">
            <table className="table table-hover table-striped" border="2px">
              <GetCandList
                keydata={this.state.keysList}
              />
              <tbody key="body">{this.renderRows()}</tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default GetCandit;
