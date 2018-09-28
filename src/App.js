import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MenuBar from './components/MenuBar'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* Enter all routes here */}
            {/* Route to our Home Page */}
            <MenuBar/>
            <Route exact path='/' render ={(props) => 
              <div>Hello</div>
            }/>

            {/* Route to our Admin Page */}
            <Route path='/admin' render = {(props) => 
              <div>Admin</div>  
            }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
