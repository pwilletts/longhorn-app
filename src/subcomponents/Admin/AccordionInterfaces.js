import React from 'react';
class AccordionAssoc extends React.Component{
    state ={
        search: null
    }

    setHtml(int){
        if(this.props.match.params.name === int.intName){
            return <li className="list-group-item list-group-item-action active list-border">{int.intName}</li>
        } else {
            return <li onClick={(e) => this.route(int.intName)} className="list-group-item list-group-item-action list-border">{int.intName}</li>
        }
    }

    handleStateChange(target, value){
        this.setState({[target]: value})
    }

    route(int){
        this.props.history.push(`/admin/interfaces/${int}`)
    }

    render(){
        return(
            !this.props.interfaces ? "No data yet" :
            <div>
                <ul className="list-group" style={{overflow:'auto',maxHeight:'54vh',pointerEvents:'auto'}}>
                    <li onClick={(e) => this.route('new')} className="list-group-item list-group-item-action list-border">Add New</li>
                    {this.props.interfaces.map(
                        int => {
                            return (
                                this.setHtml(int)
                            )
                        }                  
                    )}                               
                </ul>      
            </div>
        )}
}

export default AccordionAssoc