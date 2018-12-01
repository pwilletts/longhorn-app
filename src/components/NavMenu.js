import React from 'react';
import $ from 'jquery'
import NavHeader from '../subcomponents/NavMenu/NavHeader'

class NavMenu extends React.Component{
    state = {
        selectedItem: null
    }

    route(event, path){
        this.props.history.push(`/${path}`)
    }

    componentDidMount(){
        const a = this.props.match.path.split('/');
        $(`#collapse${a[1]}`).addClass('show');
        this.setState({selectedItem: `li${a[1]}`})
    }

    setClasses(classes, active, id){
        if(this.state.selectedItem === id){
            classes += ` active`
        }
        return classes
    }

    stateChange(event){
        this.setState({selectedItem: event.target.id})
    }

    clicker(event, route){
        this.stateChange(event)
        this.route(event, route)
    }

    render(){
        return(
            <div className="col-xs-4 col-md-2 border-right nopadding" style={{float:'left'}}>
                <div>
                    <NavHeader/>
                </div>
                <div className='accordion nopadding' id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="timesheets">
                            <h5 className="mb-0">
                                <button className={"btn btn-link collapsed"}type="button" data-toggle="collapse" data-target="#collapsetimesheets" aria-expanded="false" aria-controls="collapsetimesheets">
                                My Staff
                                </button>
                            </h5>
                        </div>
                        <div id="collapsetimesheets" className="collapse" aria-labelledby="timesheets" data-parent="#accordionExample">
                            <div className="card-body nopadding" style={{zIndex:1}}>
                                <ul className="list-group" style={{overflow:'auto',maxHeight:'54vh',pointerEvents:'auto'}}>
                                    <li id="litimesheets" onClick={(e) => this.clicker(e, 'timesheets')} className={this.setClasses("list-group-item list-group-item-action list-border", "active", 'litimesheets')} style={{paddingLeft:'15%'}}>Timesheets</li>
                                </ul>
                                {/* <ul className="list-group" style={{overflow:'auto',maxHeight:'54vh',pointerEvents:'auto'}}>
                                    <li id="liapprovals" onClick={(e) => this.clicker(e, 'schedules')} className={this.setClasses("list-group-item list-group-item-action list-border", "active", 'liapprovals')} style={{paddingLeft:'15%'}}>Schedules</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="calendar">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapsecalendar" aria-expanded="false" aria-controls="collapsecalendar">
                                My Time
                                </button>
                            </h5>
                        </div>
                        <div id="collapsecalendar" className="collapse" aria-labelledby="calendar" data-parent="#accordionExample">
                            <div className="card-body nopadding">
                                <ul className="list-group" style={{overflow:'auto',maxHeight:'54vh',pointerEvents:'auto'}}>
                                    <li id='licalendar' onClick={(e) => this.clicker(e, 'calendar')} className={this.setClasses("list-group-item list-group-item-action list-border",'active', 'licalendar')} style={{paddingLeft:'15%'}}>Calendar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" onClick={() => this.route('', 'admin')} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Admin
                                </button>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavMenu;
