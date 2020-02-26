import React,{Component} from 'react';

class GetIntList extends React.Component{

constructor(){
    super()

}

render(){
    let thds = this.props.keyData.map(header => (
        <th key={header}>{header}</th>))
    return(
        <thead>
        <tr>{thds}
        <th key="delete">Delete</th>
        <th key="update">Update</th>
            </tr>
      </thead>

    )



}



}
export default GetIntList