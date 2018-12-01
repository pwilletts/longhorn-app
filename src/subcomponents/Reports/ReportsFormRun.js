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
                    <div class="form-group col-md-12 text-left">
                        <label for="name"><b>Report Name</b></label>
                        <h5>{this.props.currentReport.name}</h5>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12 text-left">
                        <label for="dataSource"><b>Data Source</b></label>
                        <h5>{this.props.currentReport.dataSource}</h5>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12 text-left">
                        <label for="values"><b>Parameter Names</b></label>
                        {this.props.currentReport.params.map(
                        param => {
                            return (
                                <div class="form-group col-md-6 text-left">
                                    <label for="name"><b>{param}</b></label>
                                    <input id={param} type="name" class="form-control text-left" placeholder="eg. today's date"></input>
                                </div>
                            )
                        }                  
                    )} 
                    </div>
                </div>
                {this.props.match.params.name !== 'new' ? <button type="submit" onClick={() => this.props.runReport()} class="btn btn-primary float-left col-2 ml-3 mb-3">Run Now</button>: ""}
            </form>
        )
    }
}

export default ReportsForm