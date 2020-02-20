import React, { Component } from "react";
class GetCandList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.randomFun = this.randomFun.bind(this);
  }

  randomFun() {
    console.log("in GetCandList");
  }

  render() {
    let thds = this.props.keydata.map(header => (
      <th key={header}>{header}</th>

    ));

    return (
      <thead>
        <tr>{thds}
        <th key="delete">Delete</th>
        <th key="update">Update</th>
            </tr>
      </thead>
    );
  }
}
export default GetCandList;
