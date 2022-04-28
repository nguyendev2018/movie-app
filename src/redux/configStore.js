import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// middleware saga
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../saga/rootSaga';
import { AdminReducer } from "./reducer/AdminReducer";
import { UserReducer } from "./reducer/UserReducer";
import { TheaterReducer } from "./reducer/TheaterReducer";
import { TicketReducer } from "./reducer/TicketReducer";

const middlewareSaga = createSagaMiddleware();
const rootReducer = combineReducers({
    AdminReducer,
    UserReducer,
    TheaterReducer,
    TicketReducer

})
const store = createStore(rootReducer, applyMiddleware(thunk, middlewareSaga))
// call saga
middlewareSaga.run(rootSaga)
export default store;