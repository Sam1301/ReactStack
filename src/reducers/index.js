import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});

// console.log(store.getState)
// we get { libraries: whatever data was produces by LibraryReducer }
