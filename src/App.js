import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Shop_Data from './pages/shops/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.componet';
import Header from './components/header/header.component';
// import { auth, createUserProfileDocument, addCollectionAndDocuments  } from './firebase/firebase.utils';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      // addCollectionAndDocuments(
      //   'collections', 
      //   collectionsArray.map(({title,items})=>({title, items})));      I USED ALL THIS COMMENTED CODES TO IMPORT SHOPDATA TO FIREBASE TO STORE IN IT!!!
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop_Data} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact path='/signin'
            render={() => this.props.currentUser ?
              (<Redirect to='/' />) : (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapReduxStateToProps = createStructuredSelector({  // Put the state of redux to the props of this component
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(App);
