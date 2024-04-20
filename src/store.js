import { applyMiddleware, combineReducers, createStore } from "redux";
import AccountOperations from "./features/accounts/AccountOperations";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
