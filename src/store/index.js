import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Users from "./modules/infoDevs/reducers";
import User from "./modules/infoUser/reducers";
import Display from "./modules/showInsertTechs/reducers";
import DisplayWork from "./modules/showInsertWorks/reducers";
import Loading from "./modules/Loading/reducers";

const reducers = combineReducers({
  Users,
  User,
  Display,
  Loading,
  DisplayWork,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
