import React, { Component } from 'react';
class Header extends Component {
  render() {
    const buttonStyle={ width:'100px', borderRadius:'12px', height:'30px', color:'grey', margin:'10px'};
    return ( 
      <div style={{height:'50px', backgroundColor:'#7878', padding:'10px'}}>
            
            <div style={{position:'fixed', right:'0px', marginRight:'10px'}}>
            <a style={{fontSize:'30px',position:'fixed', left:'50px', padding:'10px'}}>REACT DEMO</a>
              <button  style={buttonStyle}>home</button>
              <button style={buttonStyle}>register</button>
              <button style={buttonStyle}>login</button>                          
          </div> 
      </div>
    );
  }
}

export default Header;