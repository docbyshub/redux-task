import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import reducer from './reducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['data'],
};



const rootReducer = combineReducers({
data:reducer
});

export default persistReducer(persistConfig, rootReducer);
