import React, { Component } from "react";
import App from "./App";
import Axios from "axios";
import GetCandList from "./GetCandList";
import PutCand from "./PutCand";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import swal from 'sweetalert';

class GetCandit extends React.Component {
  constructor() {
    super();
    this.state = {
      project: [],
      Filtered:[],
      isTrue: false,
      isCandidate: false,
      keysList: [],
      isDelete:false
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
      isTrue: !this.state.isTrue,
      isCandidate:false
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

  sweetAlertDelete=(e)=>{
    console.log(e.target.value);
    let targetValue=e.target.value;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      e.preventDefault();
      if (willDelete) {
        //this.deleteRow(targetValue);
        console.log(willDelete)
       // this.deleteRow(targetValue);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
          
        }).then((res)=> Axios.delete("http://localhost:8085/candidate/"+targetValue).then(
          (res)=>console.log("deleted",res)));
        
        // this.setState({
        //   isDelete:!this.state.isDelete
        // })

      } else {
        swal("Your imaginary file is safe!");
      }
    })
    
    if(this.state.isDelete){
     // this.deleteRow(targetValue);
    }
  }


  renderRows = (e) => {

    
    const trs = this.state.Filtered.map(e => {
     // let source="/UpdateCand/"+e.id;
      return(
      <tr key={e.id}>{this.renderTds(e)}
      <td><button value={e.id} name="id" onClick={this.sweetAlertDelete}>Delete</button></td>
      <td><Link to={"/UpdateCand/"+e.id} params={{data:e.id}}><button >Update</button></Link></td>
      </tr>
  
    )
    }
    );

    return trs;
  };

  changeHandler= (e)=>{
    let filterResult=[];
    let value1=e.target.value;
    let dubProject=this.state.project;
    
  
    if(value1!=''){
    filterResult=dubProject.filter(pro=>{
      let str=(pro.adhaarId).substring(0,value1.length);
      return str.includes(value1);
    })
  }else{
    filterResult=dubProject;
  }
  this.setState({
    Filtered:filterResult
  })


  }

  deleteRow=eve =>{
    const id=eve;
    console.log(id);
    Axios.delete("http://localhost:8085/candidate/"+id).then(
      (res)=>console.log("deleted",res));
      window.location.reload();

  }

  addCand = () => {
    this.setState({
      isCandidate: !this.state.isCandidate,
      isTrue:false
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
          <div className="App">
          <div className="row">
              <div className="col-lg-12">
            <input type="text" className="input" onChange={this.changeHandler} placeholder="Search..." />
            </div>
            </div>
          <div className="row">
            <div className="col-lg-12 "  style={{marginTop:50}}>
              <table className="table table-hover table-striped" border="2px">
                <GetCandList keydata={this.state.keysList} />
                <tbody key="body">{this.renderRows()}</tbody>
              </table>
            </div>
          </div>
          </div>
        ) : null}
        {isCandidate ? <PutCand /> : null}
      </div>
    );
  }
}
export default GetCandit;
