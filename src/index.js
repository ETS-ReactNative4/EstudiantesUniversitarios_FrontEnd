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
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/LoginPage' component={LoginPage} />
            <Route exact path='/RegisterPage' component={RegisterPage} />
<<<<<<< HEAD
            <Route exact path='/userlist' component={UserList} />

=======
>>>>>>> 1dd8947636b5248e55754f857f0c586b90f9751f
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();