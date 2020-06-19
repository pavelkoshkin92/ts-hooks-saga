import { combineReducers } from "redux";
import { authReducer } from "../features/auth/redux/reducers";

const rootReducer =  combineReducers({
    auth: authReducer
})

export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;
