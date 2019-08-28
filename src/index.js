/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from 'redux-starter-kit';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './pages/App';

const store = configureStore({
  reducer,
});

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app'), // eslint-disable-line no-undef
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/App.jsx', () => {
    const NextApp = require('./pages/App').default; // eslint-disable-line global-require

    render(NextApp);
  });
}
