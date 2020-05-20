import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatPage =()=>(
  <div>
    <h1>hats Page</h1>
  </div>
);

const Jakets =()=>(
  <div>
    <h1>Jakets</h1>
  </div>
);

function App() {
   return (
     <div>
       <Switch>
       <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component ={HatPage }/>
          <Route exact path='/shop/jackets' component ={Jakets}/>
       </Switch>
       
     </div>
  );
 }

export default App;
 