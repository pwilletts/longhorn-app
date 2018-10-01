import React from 'react'
import  logo from '../../images/logo.svg'

class Logo extends React.Component{
    render(){
        return(
            <img style={{maxWidth:220, marginRight:'auto',marginLeft:'auto'}} src={logo} alt="NHRMC Logo"></img>
        );
    }
}
  
export default Logo
