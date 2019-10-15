import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Index Components/app';
import * as serviceWorker from './serviceWorker';
import './Assets/css/argon.css'
import './Assets/css/bootstrap-grid.css'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

ReactDOM.render(
    
    <Router>
        <Route exact path="/" render={ () => <Redirect to="/app" /> } />
        <Route path="/app" component={App} />
    </Router>
    
    , document.getElementById('root'));

serviceWorker.unregister();
