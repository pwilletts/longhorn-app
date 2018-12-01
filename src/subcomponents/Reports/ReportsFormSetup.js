import React from 'react'

class ReportsForm extends React.Component{
    state = {
        intName: null,
        intDataSource: null,
        intSql: null
    }

    getValue(id){
        if(!this.state[id] && this.state[id] !== ''){
            return this.props.currentReport[id] ? this.props.currentReport[id] : ""
        } else {
            return this.state[id]
        }
    }

    render(){
        return(
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6 text-left">
                        <label for="name"><b>Report Name</b></label>
                        <input id="reportName" type="name" value={this.getValue('name')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} class="form-control text-left" id="name" placeholder="eg. Employee Interface" required></input>
                        <div className="invalid-feedback" id="nameFeedback"></div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 text-left">
                        <label for="dataSource"><b>Data Source</b></label>
                        <select onChange={(e) => this.props.validate(e)} id="dataSource" class="form-control" value={this.getValue('dataSource')} onChange={(e) => this.setState({[e.target.id]: e.target.value})}>
                            <option selected>Choose...</option>
                            <option>Lawson</option>
                            <option>Kronos</option>
                            <option>Workforce Management</option>
                        </select>
                        <div className="invalid-feedback" id="dataSourceFeedback"></div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12 text-left">
                        <label for="sql"><b>SQL</b></label>
                        <textarea value={this.getValue('sql')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} type="text" class="form-control" style={{minHeight:'20vh'}} id="sql" placeholder="Select last_name from employee"></textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 text-left">
                        <label for="params"><b>Parameter Names</b></label>
                        <input id="params" type="name" value={this.getValue('params')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} class="form-control text-left" id="params" placeholder="Enter in the order they appear in the query..." required></input>
                        <div className="invalid-feedback" id="paramsFeedback"></div>
                    </div>
                </div>
                <button type="submit" onClick={() => this.props.addReport()} class="btn btn-primary float-left col-4 mb-3">Save</button>
            </form>
        )
    }
}

export default ReportsForm