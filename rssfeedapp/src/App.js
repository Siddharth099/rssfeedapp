import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>    
            <Switch>
          <Route path="/:id" exact component={MainContent}/>
        </Switch>
            </div>  
        </div>  
        
      </BrowserRouter>      
    );
  }
}

export default App;
