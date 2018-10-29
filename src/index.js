import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import UserList from './components/UserList';
import UniversitiesList from './components/UniversitiesList';
import RolesList from './components/RolesList';
import TypePublications from './components/TypePublications';
import Majors from './components/Majors';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/index';
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
            <Route exact path='/roles' component={RolesList} />
            <Route exact path='/tipo_publicacion' component={TypePublications} />
            <Route exact path='/autoridad' component={Majors} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
