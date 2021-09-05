import {weatherReducer} from './weatherReducers'
import {combineReducers} from 'redux';


export const rootReducers=combineReducers({weatherReducer})