import React from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NoMatch from './components/noMatch/NoMatch';
import TestFetch from './components/testFetch/TestFetch';
import Jeopardy from './components/jeopardy/Jeopardy';
import Display from './components/display/Display';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route path='/welcome/:name/' 
        render={(props) => <Welcome {...props} name={props.match.params.name}/>} />


      <Route exact path='/' 
        render={(props) => <Welcome {...props} name="Hope" />} />
      <Route exact path='/clock' component={Clock} />
      
      <Route exact path='/contact' component={Contact} />

      <Route exact path='/testFetch'component = {TestFetch} />

      <Route exact path='/jeopardy'component={Jeopardy} />

      <Route path='*' component={NoMatch} />
    
      </Switch>
    </div>
  );
}

export default App;
