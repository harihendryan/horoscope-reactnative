import { createStore, combineReducers, applyMiddleware } from 'redux'
import HoroscopeReducer from '../redux/HoroscopeReducer'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    HoroscopeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store