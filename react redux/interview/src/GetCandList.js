import React, { Component }  from "react";
class GetCandList extends React.Component{

constructor(){
    super();
    this.state={
        data:[]
    }
    this.randomFun=this.randomFun.bind(this)
    
}

randomFun(){
console.log("in GetCandList")

}


render(){
const thds=this.props.keydata.map((header)=><th key={header}>{header}</th>)

return(
    <thead >
        <tr >{thds}</tr>
    </thead>


)
    




}
}
export default GetCandList;