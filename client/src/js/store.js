import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

const middleware = [
  thunk,
  logger
];

// if (process.env.NODE_ENV === 'dev') {
//   const createLogger = require('redux-logger');
//   const logger = createLogger();
//   middleware.push(logger);
// }

// export default function configureStore() {
//   return createStore(rootReducer, applyMiddleware(...middleware));
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)
