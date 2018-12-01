import React from 'react'

class GeneralTab extends React.Component{
    state = {
        intName: null,
        intDataSource: null,
        intSql: null
    }

    getValue(id){
        if(!this.state[id] && this.state[id] !== ''){
            return this.props.intItem[id] ? this.props.intItem[id] : ""
        } else {
            return this.state[id]
        }
    }

    render(){
        return(
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6 text-left">
                        <label for="intName"><b>Interface Name</b></label>
                        <input id="intName" onChange={(e) => this.props.validate(e)} type="intName" value={this.getValue('intName')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} class="form-control text-left" id="intName" placeholder="eg. Employee Interface" required></input>
                        <div className="invalid-feedback" id="intNameFeedback"></div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 text-left">
                        <label for="intDataSource"><b>Data Source</b></label>
                        <select onChange={(e) => this.props.validate(e)} id="intDataSource" class="form-control" value={this.getValue('intDataSource')} onChange={(e) => this.setState({[e.target.id]: e.target.value})}>
                            <option selected>Choose...</option>
                            <option>Lawson</option>
                            <option>Kronos</option>
                            <option>Workforce Management</option>
                        </select>
                        <div className="invalid-feedback" id="intDataSourceFeedback"></div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12 text-left">
                        <label for="sql"><b>SQL</b></label>
                        <textarea value={this.getValue('intSql')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} type="text" class="form-control" style={{minHeight:'20vh'}} id="intSql" placeholder="Select last_name from employee"></textarea>
                    </div>
                </div>
            </form>
        )}
}

export default GeneralTab