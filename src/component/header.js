import React, { Component } from 'react';
import SignUp from './body/signup';
import login from './body/login';
class Header extends Component {
  constructor(props){
    super(props);
    this.onClickRegister=this.onClickRegister.bind(this);
    this.onClickLogin=this.onClickLogin.bind(this);
  }
  onClickRegister(){
      let rclick=true;
      this.props.onRegister(rclick);
  };
  onClickLogin(){
    let lclick=true;
    this.props.onLogin(lclick);
  };
  render() {
    const buttonStyle={ width:'100px', borderRadius:'12px', height:'30px', color:'grey', margin:'10px'};
    return ( 
      <div style={{height:'50px', backgroundColor:'#7878', padding:'10px'}}>
            <a style={{fontSize:'30px',position:'absolute', left:'50px', padding:'10px'}}>REACT DEMO</a>
            <div style={{position:'absolute', right:'0px', marginRight:'10px'}}>
              <button  style={buttonStyle}>home</button>
              <button style={buttonStyle} onClick={this.onClickRegister}>register</button>
              <button style={buttonStyle} onClick={this.onClickLogin}>login</button>                          
          </div> 
      </div>
    );
  }
}

export default Header;