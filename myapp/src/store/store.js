import {applyMiddleware,createStore,combineReducers} from "redux"
import thunk from "redux-thunk"
import publicReducer from "../public/publicReducer"
import indexReducer from "../Pages/index/reducer"

const reducers = combineReducers({
    publicReducer:publicReducer,
    indexReducer:indexReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store