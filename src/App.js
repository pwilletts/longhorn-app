import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MenuBar from './components/MenuBar'
import NavMenu from './components/NavMenu'

import './styles/bootstrap.css'

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            {/* Enter all routes here */}
            {/* Route to our Home Page */}
            
            <Route exact path='/' render ={() => 
              <div>
                <MenuBar/>
                <NavMenu/>
              </div>             
            }/>

            {/* Route to our Visits/Sessions Page */}
            <Route path='/admin' render = {(props) => 
              <div>Admin</div>  
            }/>

            {/* Route to our Admin Page */}
            <Route path='/admin' render = {(props) => 
              <div>Admin</div>  
            }/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
