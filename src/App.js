import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* Route to our Home Page */}
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
