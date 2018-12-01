import React from 'react'
import {Link} from 'react-router-dom'

class Title extends React.Component{
    render(){
        return(
            <Link to="/"><span style={{fontSize:18,paddingLeft:'5%'}} className="navbar-brand" href="/">Workforce Management Portal</span></Link>
        );
    }
}
  
export default Title





