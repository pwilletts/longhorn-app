import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class NavHeader extends React.Component{
    setHtml(){
        if(this.props.page === 'admin'){
            return <h5 className="text-left mt-1 ml-2"><FontAwesomeIcon icon="arrow-left" style={{fontSize:18}} onClick={(e) => this.props.onClick(e, '')}></FontAwesomeIcon>   Return Home</h5>
        } else {
            return <h5 className="mt-2 mb-2 text-center" style={{fontSize:16}}>Navigation Menu</h5>
        }
    }

    render(){
        return(
            this.setHtml()
        )
    }
}

export default NavHeader