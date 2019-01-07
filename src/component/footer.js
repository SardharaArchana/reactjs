import React, { Component } from 'react';
class Footer extends Component {
  render() {
      const divStyle={height:'40px', backgroundColor:'#7878', width:'100%', textAlign:'center'};
      return ( 
        
      <div style={divStyle}>
         <p style={{fontSize:'15px', padding:'10px'}}>@copyrights.bacancytechnology</p>
      </div>
    );
  }
}

export default Footer;