import React from 'react'

class AccordionItem extends React.Component{
    render(){
        return(
            <div style={{width:'100%'}} onClick={(e) => this.props.onClick(e, 'calendar')} className="row list-group collapse" id={`collapse${this.props.type}`} aria-labelledby={`${this.props.type}`} data-parent={`#${this.props.type}`}>
                {this.props.listItem.map(
                    item => {
                        return (
                            <a className='list-group-item list-group-item-action' key={item} style={{paddingLeft:'10%'}}>{item.name}</a>
                        )
                    }
                )} 
            </div>
        )
    }
}

export default AccordionItem