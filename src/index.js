import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/LoginPage' component={LoginPage} />
            <Route exact path='/RegisterPage' component={RegisterPage} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();