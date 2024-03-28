import { createStore } from "redux";
import { ReducerFunc } from "../Reducers/ReducerFunc";

export const store = createStore(ReducerFunc)
