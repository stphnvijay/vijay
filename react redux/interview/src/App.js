import React, { Component }  from 'react';
import './App.css';
import axios from 'axios';
import GetCand from './GetCand';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import { Link,Switch,Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import GetCandList from './GetCandList';

class App extends React.Component {
  constructor(){
    super();
  }


  render() {


    return(
      <div className="App">
        <GetCand/>
      </div>
    )





  // return (
  //   <Navbar>
  //   <Router>
  // <Switch>
  //   <Route path="/GetCand" component={GetCand} />
  //   <Route path="/GetCandList" component={GetCandList} />
  // </Switch>
  // </Router>
  //   </Navbar>
    
  // );
          }
}

export default App;
