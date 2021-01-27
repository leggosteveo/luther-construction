import { combineReducers } from "redux";
import auth from "./authReducer";
import profile from "./profileReducer";
import project from "./projectReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'profile', 'project']
}


const rootReducer = combineReducers({
  auth,
  profile,
  project,
});

export default persistReducer(persistConfig, rootReducer)
