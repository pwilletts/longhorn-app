import React from 'react';
import NavHeader from '../subcomponents/NavMenu/NavHeader'
import AccordianAssoc from '../subcomponents/Admin/AccordionAssoc'
import AccordionInterfaces from '../subcomponents/Admin/AccordionInterfaces'
import AccordionReports from '../subcomponents/Admin/AccordionReports'

class NavMenuAdmin extends React.Component{
    route(event, path){
        this.props.history.push(`/${path}`)
    }

    //ensures when we hit a url directly, the associated jobs accordion is opened
    setSubClasses(comp){
        if(this.props.match.params.section === 'jobs'){
            if(comp === 'option'){
                return 'true'
            } else if(comp === 'accord'){
                return 'collapse show'
            }
        } else {
            if(comp === 'option'){
                return 'false'
            } else if(comp === 'accord'){
                return 'collapse'
            }
        }
    }

    render(){
        return(
            !this.props.jobs ? "" :
            <div className="mr-4 col-xs-4 col-md-3 col-lg-2 border-right nopadding" style={{float:'left'}}>
                <div>
                    <NavHeader page={'admin'} onClick={this.route.bind(this)}/>
                </div>
                <div className='accordion nopadding' id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Associated Jobs
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body nopadding">
                                <AccordianAssoc
                                    {...this.props}
                                    jobList={this.props.jobs}
                                    route={this.route.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavMenuAdmin;
