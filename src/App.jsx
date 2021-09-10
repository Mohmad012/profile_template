import React , { useEffect } from "react";
import {Helmet} from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'
import $ from 'jquery';
import {
    Activity,
    Auctions,
    Authors,
    ConnectWallet,
    Contact,
    CreateItem,
    Discover,
    Home,
    ItemDetails,
    Profile,
    Login,
    SignUp
} from './pages'

import 'aos/dist/aos.css';
import './assets/css/bootstrap.min.css'
import './assets/css/global.css'
// import '../../assets/css/style.css';
// import './global.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  useEffect(() => {

      if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }
  },[])


  return (
    
    	<div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            NFT Marketplace
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Helmet>

  			<Switch>
          <Route path="/" exact component={Home} />
  				<Route path="/activity" component={Activity} />
  				<Route path="/auctions" component={Auctions} />
          <Route path="/authors" component={Authors} />
  				<Route path="/connectWallet" component={ConnectWallet} />
          <Route path="/contact" component={Contact} />
          <Route path="/createitem" component={CreateItem} />
  				<Route path="/discover" component={Discover} />
          <Route path="/itemDetails" component={ItemDetails} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
  			</Switch>
	    </div>
    	
    
  );
}

export default App;