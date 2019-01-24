import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Welcome from './services/Welcome';
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
import UserAdminSuccess from './components/UserAdminSuccess';
import ListEventos from './services/ListEventos';
import List_estado_documento from './services/List_estado_documento';
import UsuarioLogueado from './services/UsuarioLogueado';
import UsuarioRegistrado from './services/UsuarioRegistrado';

//import { Provider } from 'react-redux';
//import store from './store/index';
import Redireccionar from './components/Redireccionar'

import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ListComentarios from './services/ListComentarios';








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
            <Route exact path='/UserAdminSuccess' component={UserAdminSuccess} />

            {/**endpoints**/}            
            
            <Route exact path='/welcome' component={Welcome} />
            <Route exact path='/publicaciones' component={ListEventos} />
            <Route exact path='/Redireccionar' component={Redireccionar} />
            <Route exact path='/estadosdocumento' component={List_estado_documento} />
            <Route exact path='/datosUsuario' component={UsuarioLogueado} />
            <Route exact path='/registroUsuario' component={UsuarioRegistrado} />
            <Route exact path='/listacomentarios' component={ListComentarios} /> 


        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
