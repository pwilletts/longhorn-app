import React from 'react'
import {Link} from 'react-router-dom'

class Title extends React.Component{
    render(){
        return(
            <Link to="/"><span className="navbar-brand" href="/">Workforce Management Portal</span></Link>           
        );
    }
}
  
export default Title





