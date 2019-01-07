import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import Footer from './component/footer';
import Body from './component/body/body';

class App extends Component {
  render() {
    return (   
        <div style={{backgroundColor:'#1111'}}>
            <div><Header/></div>
            <div><Body /></div>
            <div><Footer/></div>
        </div>   
    );
  }
}

export default App;
