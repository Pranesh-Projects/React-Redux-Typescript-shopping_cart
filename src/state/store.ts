// Store
import reducers from "./reducer/index";

// Redux
import { createStore, applyMiddleware } from "redux";
// Thunk
import thunk from "redux-thunk";

// create Store
export const store = createStore(
    reducers,
    {}, // default state of store
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
