import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserList from './components/UserList';
import UniversitiesList from './components/UniversitiesList';
import App from './components/App';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/LoginPage' component={LoginPage} />
            <Route exact path='/RegisterPage' component={RegisterPage} />
            <Route exact path='/usuarios' component={UserList} />
            <Route exact path='/universidad' component={UniversitiesList} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
