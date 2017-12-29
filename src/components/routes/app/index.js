import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import { ContactUs, Jogs, Info } from './routes';

const App = () => (
    <div>
        <TopBar />
        <Switch>
            <Route path="/jogs" component={Jogs} />
            <Route path="/info" component={Info} />
            <Route path="/contact_us" component={ContactUs} />
        </Switch>
    </div>
);

export default App;
