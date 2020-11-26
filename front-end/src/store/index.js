import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/reducer";
import { notesReducer } from "./notes/reducer";

const reducers= {
  auth: authReducer,
  notes: notesReducer
}

export const store = createStore(
  combineReducers(reducers)
)
