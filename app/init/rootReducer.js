// Core
import { combineReducers } from 'redux';
// Reducers
import { photosReducer as photos } from '../modules/photos/reducer';

export const rootReducer = combineReducers({
    photos,
});
