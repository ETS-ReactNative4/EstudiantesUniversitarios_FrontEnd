import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Welcome from './components/Welcome';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import MisionPage from './components/MisionPage';
import VisionPage from './components/VisionPage';
import EventPage from './components/EventPage';
import QuienesSomosPage from './components/QuienesSomosPage';
import UniversityPage from './components/UniversityPage';
import ContactPage from './components/ContactPage';
import App from './components/App';
import NewBarHome from './components/NewBarHome';
import UserLoginSuccess from './components/UserLoginSuccess';
//import { Provider } from 'react-redux';
//import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/LoginPage' component={LoginPage} />
            <Route exact path='/RegisterPage' component={RegisterPage} />
            <Route exact path='/HomePage' component={HomePage} />
            <Route exact path='/MisionPage' component={MisionPage} />
            <Route exact path='/EventPage' component={EventPage} />
            <Route exact path='/VisionPage' component={VisionPage} />
            <Route exact path='/UniversityPage' component={UniversityPage} />
            <Route exact path='/QuienesSomosPage' component={QuienesSomosPage} />
            <Route exact path='/ContactPage' component={ContactPage} />
            <Route exact path='/NewBarHome' component={NewBarHome} />
            <Route exact path='/UserLoginSuccess' component={UserLoginSuccess} />
            <Route exact path='/welcome' component={Welcome} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
