import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop_Data from './pages/shops/shop.components';
import Header from './components/header/header.component';
import SingInAndSignUpPages from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
    constructor(){
      super();

      this.state={
        currentUser: null
      }; 

    }

    unsubscribeFromAuth = null;

    componentDidMount()  {
       this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
          this.setState({ currentUser: user });
          
        });
      }

      componentWillUnmount() {
        this.unsubscribeFromAuth();
      }

  render(){
       return (
     <div>
       <Header currentUser={this.state.currentUser} />
       <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/Shop' component ={Shop_Data}/>
       <Route path='/signin' component ={SingInAndSignUpPages}/>
       </Switch>
       
     </div>
  );
  }

 }

export default App;
 