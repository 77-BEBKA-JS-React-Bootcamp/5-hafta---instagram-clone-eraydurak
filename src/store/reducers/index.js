import { combineReducers } from "redux";
import { photosReducer } from "./photosReducers";
import { commentsReducer } from "./commentsReducers";

const rootReducer = combineReducers({
	photosReducer,
	commentsReducer,
});

export default rootReducer;
