import React from 'react'

class SearchDropdown extends React.Component{
    setClasses(result){
        var classes = "list-group-item list-group-item-action"
        if(result === this.props.selected){
            classes += ' active'
        }
        return classes
    }

    setHtml(){
        if(!this.props.searchResults || this.props.searchResults.length === 0){
            return <div className="mt-3 col-10 text-left"><h6>No available jobs found...</h6></div>
        } else {
            return <React.Fragment>
            <h6 className="mt-3 text-left"><u>Select a result and click add...</u></h6>
            <div className="well" style={{maxHeight:300,overflow:'auto'}}>
                {this.props.searchResults.map(
                    result => {
                        return(
                            <ul className="list-group">
                                <li className={this.setClasses(result)} onClick={(e) => this.props.onSelect('selectedAssocJob', result)}>
                                    <div className="row">
                                        {result.jobName}
                                    </div> 
                                </li>
                            </ul>
                        )
                    }
                )}
            </div>    
        </React.Fragment>  
        }
    }

    render(){
        return(
            this.setHtml()            
        )
    }
}

export default SearchDropdown