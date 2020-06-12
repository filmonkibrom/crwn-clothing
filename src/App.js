import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop_Data from './pages/shops/shop.components';
import Header from './components/header/header.component';
import SingInAndSignUpPages from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
    constructor(){
      super();

      this.state={
        currentUser: null
      }; 

    }

    unsubscribeFromAuth = null;

    componentDidMount()  {
       this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){  
         const userRef = await createUserProfileDocument(userAuth);
          
         userRef.onSnapshot(snapShot => {
          this.setState({ currentUser: {
            id: snapShot.id,
            ...snapShot.data() }
          })
          console.log(this.state);
         });
         
        }
        this.setState({currentUser:userAuth});
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
 