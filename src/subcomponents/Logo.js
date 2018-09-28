import React from 'react'
import  logo from '../images/logo.svg'

class Logo extends React.Component{
    render(){
        return(
            <img className="menu-img" src={logo} alt="NHRMC Logo"></img>
        );
    }
}
  
export default Logo
