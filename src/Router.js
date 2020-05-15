import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import EditForm from './components/EditForm';
import Signup from './components/Signup';
import Login from './components/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/edit/:id" component={EditForm} />
        </BrowserRouter>
    );
}

export default Router;
