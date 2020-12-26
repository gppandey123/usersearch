import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';

import PersonList from './components/personlist/PersonList';
import UserLogin from './components/userlogin/UerLogin';

class App extends Component {
  

  
  render() {
  
    return (
      <div>
         <Switch>
           <Route exact path="/" component={UserLogin} />
           <Route exact path="/user" component={PersonList} />
         </Switch>
      </div>
    )
  }
}

export default App;
