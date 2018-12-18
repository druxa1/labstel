import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Router from 'react-router-dom/Router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './containers/Main';
import News from './containers/News';
import GalleryPhoto from './containers/GalleryPhoto';
import GalleryVideos from './containers/GalleryVideos';
import Contacts from './containers/Contacts';
import FootballDevelopment from './containers/FootballDevelopment';
import store from './store/configurateStore';

import './style.css';

const history = createBrowserHistory();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Fragment>
              <Route exact path="/" component={Main} />
              <Route path="/news" component={News} />
              <Route path="/photo" component={GalleryPhoto} />
              <Route path="/videos" component={GalleryVideos} />
              <Route path="/сontacts" component={Contacts} />
              <Route path="/footballdevelopment" component={FootballDevelopment} />
            </Fragment>
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
