import React, { Component } from "react";
import Axios from "axios";
import GetIntList from './GetIntList';
import { Link } from "react-router-dom";
import PutInter from "./PutInter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import  UpdateInt from "./UpdateInt"

class GetInt extends React.Component {
  
 
  constructor() {
    super();
    this.state = {
      project:[],
      keysList:[],
      isTrue:false,
      isInterview:false
    };
    // Axios.get("http://localhost:8085/interview").then(response =>this.setState({project: response.data})
    
    //   // this.setState({ project: response.data })
    // );
    this.renderRows=this.renderRows.bind(this)
    this.getList=this.getList.bind(this)
    this.renderTds=this.renderTds.bind(this)
    this.deleteRow=this.deleteRow.bind(this)
  }

  componentDidMount(){
    Axios.get("http://localhost:8085/interview").then(response =>this.setState({project: response.data})
    
      // this.setState({ project: response.data })
    );

  }

  getList=()=>{
    console.log(this.state.project)
    this.setState({
      isTrue:!this.state.isTrue,
      keysList:Object.keys(this.state.project[1])
    })
    console.log(this.state.project)
  }

 renderRows=()=>{
  const trs = this.state.project.map(e => {
    console.log(e.candidate_id);
    return(
    <tr key={e.candidate_id}>{this.renderTds(e)}
    <td><button value={e.candidate_id} name="candidate_id" onClick={this.deleteRow}>Delete</button></td>
    <td><Link to={"/UpdateInt/"+e.candidate_id} params={{data:e.candidate_id}}><button >Update</button></Link></td>
   </tr>)
    
 }
  )
  return trs;
};

 renderTds = project1 => {
  //console.log(project1["firstName"]);
  var keys = Object.keys(project1);
  const tds = keys.map(
    dat => <td key={dat}>{project1[`${dat}`]}</td>)
    //console.log(project1[`${dat}`])
  
  return tds;
};

 deleteRow=event =>{
  const candidate_id=event.target.value;
  console.log(candidate_id);
  Axios.delete("http://localhost:8085/interview/"+candidate_id).then(
    (res)=>console.log("deleted",res)),
    this.props.history.push("/");

}

addInterview=()=>{

this.setState({
  isInterview:!this.state.isInterview
})


}

  render(){
    const{project,isTrue,keysList,isInterview}=this.state;
    
    return(
    <div className="App">
      <h1>Interview</h1>
      <div className="row">
        <div className="col-lg-6">
      <button type="button" className="btn btn-success"  onClick={this.getList}>View interviewList</button>
      </div>
      <div className="col-lg-6">
        <button type="button" className="btn btn-success"  onClick={this.addInterview}>Add Interview</button>
        </div>
        </div>
      {isTrue?(
        <div className="row">
          <div className="col-lg-1">
            </div>
          <div className="col-lg-7">
          <table className="table table-hover table-striped" border="2px">
            <GetIntList  keyData={keysList}/>
            <tbody key="body">{this.renderRows()}</tbody>
            </table>
            </div>
          </div>

      ):null}
      {isInterview?(
        <PutInter/>
      ):null}
    </div>
    )



    // this.state.project.map((e)=>{
    // return(
    //   <div class="card-deck">
    //   <div class="card">
    //     <img src="..." class="card-img-top" alt="..."/>
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    //     </div>
    //   </div>
    //   </div>



    // )




  }
}
export default GetInt



