import React, { Component } from 'react';
import Router from './navigation/router';


export default class App extends Component { 
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router></Router>
    )
  }
}

 
