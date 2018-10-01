import React from 'react'

class NavBarItem extends React.Component{
    //move these into module at later date in order to reference via headerHTML.badge or headerHTML.text
    setHtml(props){
        if(props.type === 'badge'){
            return <li className="nav-item mt-auto mb-auto"><span className="badge badge-danger">2</span></li>
        } else if (props.type === "text"){
            return <li className="nav-item"><h5 className="ml-2 navbar-text" href="">Hello Patrick!<span className="sr-only">(current)</span></h5></li>
        }
    }

    render(){
        return(
            this.setHtml(this.props)
        );
    }
}
  
export default NavBarItem