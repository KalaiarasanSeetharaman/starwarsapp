import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarWarContextProvider from './Component/Context/StarwarContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PublicLayout from './Layout/PublicLayout';
import PrivateLayout from './Layout/PrivateLayout';
import Nomatch from './Common/Nomatch';


 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history"

const history = createBrowserHistory();

function App(props) {
  library.add(fab, faMapMarker,faPhone,faEnvelope)
  return (
    <StarWarContextProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={PublicLayout} />
          <Route exact path="/starwar/search" component={PrivateLayout} history={history} />
          <Route path="*">
              <Nomatch />
          </Route>
        </Switch>
      </Router>
    </StarWarContextProvider> 
  );
}
export default App; 