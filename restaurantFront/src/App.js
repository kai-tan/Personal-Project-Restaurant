import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Homepage from '../src/components/homepage/Homepage.component'
import Ourdishes from './components/ourdishes/Ourdishes.component'
import AboutUs from './components/aboutus/aboutus.component'
import PurchaseHistory from './pages/purchase-history/purchase-history.component'
import ContactUs from './components/contactus/contactus.component'
import Checkout from './components/checkout/checkout.component'
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component'
import { selectCurrentUser } from './redux/user/user.selectors'
import adminOrder from './components/adminOrder/adminOrder.component'
import SingleProductPage from './pages/singleproduct/singleProduct.component';
import AccountDetails from './pages/account-details/account-details.component';
import LostPassword from './pages/lost-password/lost-password.component'
import MyAccount from './pages/my-account/my-account.component'
import SingleEditProductPage from './pages/single-edit-product/single-edit-product.component'
import SingleCreateProductPage from './pages/create-product/create-product.component'
import Footer from './components/footer/footer.component'


class App extends React.Component {

  
  render() {
      return (
        <div className="app">
          <Switch>
              {/* <Route path="/" exact component={Homepage} />   */}
              <Route path="/" exact component={Ourdishes} />  
              <Route path="/about-us" component={AboutUs} />  
              <Route path="/manage-orders" component={adminOrder} />  
              <Route path="/purchase-history" component={PurchaseHistory}/>
              <Route path="/contact-us" component={ContactUs} />  
              <Route path='/checkout' component={Checkout} />
              <Route path="/account-details" component={AccountDetails} />
              <Route path="/lost-password" component={LostPassword} />
              <Route path="/my-account" component={MyAccount} />
              <Route path='/signin' exact render={() => 
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )}/>
              <Route path="/single-product/:id" component={SingleProductPage} />
              <Route path="/single-edit-product/:id" component={SingleEditProductPage} />
              <Route path="/single-create-product" component={SingleCreateProductPage} />
          </Switch>
          <Footer />
        </div>
      )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App);
