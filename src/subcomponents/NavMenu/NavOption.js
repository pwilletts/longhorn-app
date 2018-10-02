import React from 'react'

class NavOption extends React.Component{
    render(){
        return(
            <a href="/calendar" id={this.props.type} data-toggle="collapse" data-target={`#collapse${this.props.type}`} aria-expanded="false" aria-controls={`collapse${this.props.type}`} className="bg-grey list-group-item list-group-item-secondary list-group-item-action border-bottom">{this.props.type}</a>
        )
    }
}

export default NavOption