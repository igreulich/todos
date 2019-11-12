import { configureStore } from 'redux-starter-kit';

import reducer from '../reducers';

export default function makeStore() {
  const store = configureStore({
    reducer,
  });

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
}
