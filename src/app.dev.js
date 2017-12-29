import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';
import Root from './components';
import './styles/index.scss';

const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('app')
    );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components', () => {
        render(Root);
    });
}
