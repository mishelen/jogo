import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, NotFound } from './routes';

const MainApp = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

MainApp.propTypes = {
    store: PropTypes.shape().isRequired
};

export default MainApp;
