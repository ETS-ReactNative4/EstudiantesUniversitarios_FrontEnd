import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
/*import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';*/
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Contact from './components/Contact';
import UserList from './components/UserList';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/LoginPage' component={LoginPage} />
            <Route exact path='/RegisterPage' component={RegisterPage} />
            <Route exact path='/userlist' component={UserList} />

        </div>
    </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
