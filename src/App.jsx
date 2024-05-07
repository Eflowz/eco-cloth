import React from 'react';
import './App.css';
import ShopPage from './pages/shop/shop.component';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, db, doc, getDoc} from  './components/Firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = doc(db, "users", userAuth.uid);
        const docSnap = await getDoc(userRef); 
        setCurrentUser({
          id: docSnap.id,
          ...docSnap.data() 
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" render={() => {
              if (this.props.currentUser) {
                const navigate = useNavigate();
                navigate('/'); 
      } else {
        return (<SignInAndSignUpPage />);
      }
      return null; 
    }} />
          </Routes>
      </div>
    );
  }
}



const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App);
