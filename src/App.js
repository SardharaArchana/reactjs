import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import Footer from './component/footer';
import Body from './component/body/body';
import SignUp from './component/body/signup';
import Login from './component/body/login';

class App extends Component {
    constructor(props){
      super();
      this.state={
        isClickRegister:false,
        isClickLogin:false
      }
      this.register=this.register.bind(this);
      this.login=this.login.bind(this);
    }
    register(rclick){
      console.log('rclick',rclick);
      this.state.isClickRegister=rclick;
      console.log('rclc', this.state.isClickRegister);
    };
    login(lclick){
      this.state.isClickLogin=lclick;
    };
  render() {
    
    return (   
      
        <div style={{backgroundColor:'#1111'}}>
            <div><Header onRegister={this.register} onLogin={this.login}/></div>            
            {this.state.isClickRegister ? <div><SignUp/></div> : console.log('error') }
            {this.state.isClickLogin ? <div><Login/></div> : console.log('error') }
            <div><Body /></div>
            <div><Footer/></div>
        </div>   
    );
  }
}

export default App;
