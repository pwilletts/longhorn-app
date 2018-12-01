import React from 'react'

class OutputTab extends React.Component{
    state = {
        intOutputType: null,
        intTarget: null,
        intFilePath: null
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
                    <div class="form-group text-left col-3">
                        <label for="intName"><b>Type</b></label>
                        <select id="intOutputType" class="form-control" value={this.getValue('intOutputType')} onChange={(e) => this.setState({[e.target.id]: e.target.value})}>
                            <option selected>Choose...</option>
                            <option>CSV</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group text-left col-3">
                        <label for="intName"><b>Target</b></label>
                        <select id="intTarget" class="form-control" value={this.getValue('intTarget')} onChange={(e) => this.setState({[e.target.id]: e.target.value})}>
                            <option selected>Choose...</option>
                            <option>Lawson</option>
                            <option>Kronos</option>
                            <option>Workforce Management</option>
                        </select>
                    </div>
                </div>   
                <div class="form-row">
                    <div class="form-group text-left col-9">
                        <label for="intFilePath"><b>File Path</b></label>
                        <input type="intName" value={this.getValue('intFilePath')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} class="form-control text-left" id="intFilePath" placeholder="eg. file path"></input>
                    </div>
                    </div>
            </form>
        )}
}

export default OutputTab