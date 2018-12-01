import React from 'react'
import Responsive from 'react-responsive';
import Title from '../subcomponents/MenuBar/Title'
import Logo from '../subcomponents/MenuBar/Logo'
import api from '../api/api';

const Medium = props => <Responsive {...props} maxWidth={990}/>
const Large = props => <Responsive {...props} minWidth={768}/>


class MenuBar extends React.Component{
    state = {
        name: null
    }

    setName(){
        if(!this.state.name){
            api.getEmpName().then(json => {
                if(!json.name){
                    return ''
                } else {
                    this.setState({name: json.name})
                }
            })
        } else {
            return this.state.name
        }
    }
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="w-25 text-left">
                    <Title/>
                </div>
                <Large>
                    <div className="w-50 text-center logo" id="navbarSupportedContent">
                        <Logo/>
                    </div>
                </Large>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="w-25 collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Medium>
                            <li className="nav-item">
                                <a className="nav-link" href="/calendar">MyTime</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="workflow">Approvals</a>
                            </li>
                        </Medium>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Log Out</a>
                        </li>                        
                    </ul>
                </div>
                
            </nav>
        );
    }
}

export default MenuBar;