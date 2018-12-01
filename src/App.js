import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Responsive from 'react-responsive';
import 'react-app-polyfill/ie9'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faPlus, faTrash, faTrashAlt, faTimes, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import MenuBar from './components/MenuBar'
import NavMenu from './components/NavMenu'

import api from './api/api'
import Calendar from './pages/Calendar';
import Timesheets from './pages/TImesheets';
import Admin from './pages/Admin';
import logo from './images/logo.svg';
import './styles/bootstrap.css';

library.add(faArrowLeft,faPlus,faTrash,faTrashAlt,faTimes,faAlignJustify)

const Medium = props => <Responsive {...props} minWidth={768}/>

class App extends React.Component {
  state = {
    session: 'unauthorized',
    sec: null
  }

componentWillMount(){
  api.auth().then(json => this.setState({session: json.status}, function(){
    if(this.state.session === 'unauthorized'){
      window.location.replace('https://mernapdev:3001')
    }
  }))
}

  render() {
    return (
        this.state.session === 'authorized' ?
        <BrowserRouter>
          <Switch>
            {/* Enter all routes here */}
            {/* Route to our Home Page */}
            <Route exact path='/' render ={(props) => 
              <div>
                <div class="col-xs-12 col-md-12 nopadding">
                  <MenuBar name={this.state.name} page={"home"}/>
                </div>
                <div>
                  <NavMenu {...props}/>
                </div>
              </div>
            }/>

            {/* Route to our Visits/Sessions Page */}
            <Route path='/calendar' render = {(props) =>
              <div>
                <div className="col-xs-12 col-md-12 nopadding">
                  <MenuBar name={this.state.name} page={"calendar"}/>
                </div>
                <div>
                    <Medium><NavMenu {...props}/></Medium>
                    <Calendar/>
                </div>
              </div>
            }/>

            {/* Route to our Visits/Sessions Page */}
            <Route path='/timesheets' render = {(props) =>
              <div>
                <div className="col-xs-12 col-md-12 nopadding">
                  <MenuBar name={this.state.name} page={"calendar"}/>
                </div>
                <div>
                    <Medium><NavMenu {...props}/></Medium>
                    <Timesheets/>
                </div>
              </div>
            }/>

            {/* Route to our Admin Page */}
            <Route path='/admin/:section?/:name?' render = {(props) => 
                <div>
                    <div className="col-xs-12 col-md-12 nopadding">
                      <MenuBar name={this.state.name} page={"admin"}/>
                    </div>
                    <Admin {...props}/>
                </div>
            }/>
          </Switch>
        </BrowserRouter>:
        <React.Fragment>
          <nav className=" col-12 navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
                <div className="col-md-4">
                  <span style={{fontSize:20,paddingLeft:'5%'}} className="navbar-brand" href="/">Workforce Management Portal</span>
                </div>
                <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
                  <img style={{maxWidth:220, marginRight:'auto',marginLeft:'auto'}} src={logo} alt="NHRMC Logo"></img>
                </div>
            </nav>
            <div className="col-12 text-center">
              <h5>{this.state.session === null ? "Logging you in..." : "We were unable to log you in..."}</h5>
            </div>
        </React.Fragment>
    );
  }
}

export default App;
