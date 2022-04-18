import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const isDev = process.env.NODE_ENV !== 'prod';
const {composeWithDevTools} = isDev ? require('redux-devtools-extension') :
  require('redux-devtools-extension/logOnlyInProduction');

const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );


export default store;