import { combineReducers } from "redux";

import authReducer from "../features/auth/redux/reducers";
import overviewReducer from "../features/overview/redux/reducers";

const rootReducer =  combineReducers({
    auth: authReducer,
    overview: overviewReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
