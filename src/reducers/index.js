import {combineReducers, compose} from 'redux';
import CollisionReducer from './CollisionReducer';

const allReducers = combineReducers({
    collisions: CollisionReducer
});


export default allReducers;