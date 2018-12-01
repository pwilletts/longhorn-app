import React from 'react'

class ScheduleTab extends React.Component{
    state = {
        intFreq: null,
        intTime: null,
        intDayOfWeek: null
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
                    <div class="form-group col-md-3 text-left">
                        <label for="intName"><b>Frequency</b></label>
                        <select id="intFreq" class="form-control" value={this.getValue('intFreq')} onChange={(e) => this.setState({[e.target.id]: e.target.value})}>
                            <option selected>Choose...</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Bi-Weekly</option>
                            <option>N/A</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3 text-left">
                        <label for="time"><b>Time</b></label>
                        <input type="intTime" value={this.getValue('intTime')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} class="form-control text-left" id="intTime" placeholder="eg. Employee Interface"></input>                 
                    </div>
                    <div class="form-group col-md-3 text-left">
                        <label for="time"><b>Day of Week</b></label>
                        <input type="IntDayOfWeek" value={this.getValue('intDayOfWeek')} onChange={(e) => this.setState({[e.target.id]: e.target.value})} class="form-control text-left" id="intDayOfWeek" placeholder="eg. Employee Interface"></input>                 
                    </div>
                </div>             
            </form>
        )}
}

export default ScheduleTab