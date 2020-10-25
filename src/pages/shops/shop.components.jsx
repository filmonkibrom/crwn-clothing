import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

                // const ShopPage = ({match}) => (
                //           <div className='shop-page'>
                //             <Route exact path={`${match.path}`} component ={CollectionsOverview} />
                //             <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
                //           </div>
                // );     

                // I COMMENTED IT TO SHOW HOW I CHANGED FANCTIONAL COMPONENT TO CLASS COMPONENT   !!!!!!!!!


 class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

      componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionsMap);
        });
      }

      render() {
        const { match } = this.props;
        return(
          <div className='shop-page'>
          <Route exact path={`${match.path}`} component ={CollectionsOverview} />
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
        );
      }
    }

    const mapDispatchToProps = dispatch => ({
      updateCollections: collectionsMap => 
      dispatch(updateCollections(collectionsMap))
    });
export default connect(null, mapDispatchToProps)(ShopPage);