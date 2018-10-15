import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
/*import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';*/
import Grid from './components/Grid';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            {/*<Route exact path='/loginPage' component={LoginPage} />
            <Route exact path='/registerPage' component={RegisterPage} />*/}
            <Route exact path='/nosotros' component={Grid} />

        </div>
    </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
