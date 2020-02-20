import React, { Component } from "react";
import Axios from "axios";


class GetInt extends React.Component {
  constructor() {
    super();
    this.state = {
      project:[]
    };
  }

  componentWillMount() {
    Axios.get("http://localhost:8085/interview").then(response =>
      this.setState({ project: response.data })
    );
  }

  render(){
    this.state.project.map((e)=>{
    return(
        <div className="container">
            


        </div>



    )




  })
}
}



