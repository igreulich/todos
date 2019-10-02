/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-parens */
const findAction = (store, type) => store.getActions().find(action => action.type === type);

export function getAction(store, type) {
  const action = findAction(store, type);

  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      const action = findAction(store, type); // eslint-disable-line no-shadow

      if (action) resolve(action);
    });
  });
}
/* eslint-enable arrow-parens */
/* eslint-enable import/prefer-default-export */
