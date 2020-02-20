import React, { Component }  from 'react';

class Sample extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
      this.setState({[event.target.name]: [event.target.value]});
      console.log(this.state.username)

    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input
          type='text' name="username"
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
        </form>
      );
    }
  }
  export default Sample