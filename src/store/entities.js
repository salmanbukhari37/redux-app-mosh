import { combineReducers } from "redux";
import bugsReducer from './bug';
import projectsReducer from './projects';

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer
})