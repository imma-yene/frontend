import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getUsesReducer, userdeleteReducer, userReducer } from './reducer/userReducer';

const reducer=combineReducers({
    user:userReducer,
   users:getUsesReducer,
 deleteuser:userdeleteReducer

})

const middleware=[thunk]

const store=createStore(
    reducer,
    composeWithDevTools( applyMiddleware( ...middleware))
)


export default store;