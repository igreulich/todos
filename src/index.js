/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import App from './pages/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
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
