/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'redux-starter-kit';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import reducer from './reducers';
import App from './sections/App';

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
    document.getElementById('app'),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./sections/App.jsx', () => {
    const NextApp = require('./sections/App').default; // eslint-disable-line global-require

    render(NextApp);
  });
}
