import { combineReducers } from 'redux'

import folder from './folder';
import form from './form';
import note from './note';
import user from './user';

export default combineReducers({
    folder,
    form, 
    note,
    user
});