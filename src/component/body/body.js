import React, { Component } from 'react';
import Login from './login';
import SignUp from './signup';
import LogIn from './login';
class Body extends Component {
    constructor(props){
      super(props);
      this.state={
          name:'',
          password:'',
          cpassword:'',
          pnum:'',
          isClick:false      
      }
      this.setClick=this.setClick.bind(this);
      this.setUser=this.setUser.bind(this);
  }
  setClick(key,value,click){
      let obj={};
      obj[key]=value;
      this.setState(obj);
      this.setState({isClick:click});
    
  };  
  setUser(name,password){
      if(name=='' ||password==''){
          alert('please enter your details');
      }
      else if(name==this.state.name && password==this.state.password){
          alert('sucessfully logged in');
      }
      else if(name!=this.state.name || password!=this.state.password){
          alert('user invalid');
      }
      
  }; 
  render() {
    const buttonStyle={ width:'100px', borderRadius:'12px', height:'30px', color:'grey', margin:'10px'};
    return ( 
      <div style={{padding:'10px'}}>
            {console.log(this.state.isClick)}
           <table>
           <tr><td> <SignUp click={this.setClick}/> </td>
            {this.state.isClick ? <td><LogIn user={this.setUser}/></td> : console.log('error')}
            </tr> </table>
      </div>
    );
  }
}

export default Body;