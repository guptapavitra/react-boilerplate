import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import reducers from '../reducers';

const initialState = {}

export default createStore(combineReducers({
    ...reducers,
    router: routerReducer
}), initialState, compose(
    applyMiddleware(thunk, routerMiddleware(createHistory())),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));