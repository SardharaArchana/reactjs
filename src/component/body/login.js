import React, { Component } from 'react';
class LogIn extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
        this.checkUser=this.checkUser.bind(this);
    }
    onChange(event){
        const key = event.target.id;
        
        let obj={};
        obj[key]=event.target.value;
        this.setState(obj);
       
    };
    checkUser(){
        const name=this.state.name;
        const password=this.state.password;
        this.props.user(name,password);                  
    };
    name(){
        return(<div>
        Enter  Name:<input type='text' onChange={e=>this.onChange(e)} id='name' style={{marginRight:'25px'}}/>
        </div>);
    };
    password(){
        return(<div>
        Enter  password:<input type='password' onChange={e=>this.onChange(e)} id='password' style={{marginRight:'25px'}}/>
        </div>);
    };
    render(){
        const divStyle={height:'auto', borderStyle:'solid', background:'#6864',padding:'100px', width:'fit-content'};
        return(
        <center><div style={divStyle}>
            <h1>login</h1>
            {this.name()}<br/><br/>
            {this.password()}<br/><br/>
            <center><button type='submit' onClick={this.checkUser}>login</button></center><br/><br/>   
        </div></center>);
    }
}
export default LogIn;