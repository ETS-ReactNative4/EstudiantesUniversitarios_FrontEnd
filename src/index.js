import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            {/*<Route  path='/login' exact component={Login} />*/}
            {/*<Route  path='/register' exact component={Register} />*/}
            <Route  path='/login' component={LoginPage} />
            <Route  path='/register' component={RegisterPage} />


        </div>
    </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
