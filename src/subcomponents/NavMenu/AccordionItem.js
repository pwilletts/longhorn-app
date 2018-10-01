import React from 'react'
var list = [1,2,3]

class AccordionItem extends React.Component{
    render(){
        return(
            <div style={{width:'100%'}} className="row list-group" id={`collapse${this.props.type}`} className="collapse" aria-labelledby={`${this.props.type}`} data-parent={`#${this.props.type}`}>
                {list.map(
                    request => {
                        return (
                            <a className='list-group-item list-group-item-action' style={{paddingLeft:'10%'}}>asdfasdf</a>
                        )
                    }
                )} 
            </div>
        )
    }
}

export default AccordionItem