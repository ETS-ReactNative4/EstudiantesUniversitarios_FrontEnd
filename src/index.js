import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Login from './components/Login';
import Register from './components/Register';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            <Route  path='/login' exact component={Login} />
            <Route  path='/register' exact component={Register} />

        </div>
    </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
