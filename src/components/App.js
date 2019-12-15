import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import LeadComponent from './Lead';
import {Route} from 'react-router-dom';
import ShowAllComponent from './ShowAllComponent';
import ShowMale from './ShowMale'
import {store} from '../store/store';
import Navigation from './Navigation';
import ShowFemale from './ShowFemale';

class App extends React.Component{


  render() {
        return (
          <Provider store={store}>
          <div>
           <div className="container-fluid">
              <Navigation / >
           </div>
            <div className="container-fluid mt-3">
              <Route path="/app/showAll" component={ShowAllComponent} />
              <Route path="/app/showMale" component={ShowMale} />
              <Route path="/app/showFemale" component={ShowFemale} />
            </div>
            <hr />
            <div className="container-fluid mt-3">
              <LeadComponent / >
            </div>
           </div> 
          </Provider>
    );
  }
 
}

export default App;
