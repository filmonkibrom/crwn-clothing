import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop_Data from './pages/shops/shop.components';
import Header from './components/header/header.component';
import SingInAndSignUpPages from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';




function App() {
   return (
     <div>
       <Header/>
       <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/Shop' component ={Shop_Data}/>
       <Route path='/signin' component ={SingInAndSignUpPages}/>
       </Switch>
       
     </div>
  );
 }

export default App;
 