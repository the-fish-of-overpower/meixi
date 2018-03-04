import {GET_INDEX_INFO} from "./actionTypes"

const defaultState = {
    indexData:{}
}
function indexReducer(state = defaultState,action){
    switch(action.type){
        case GET_INDEX_INFO:
        var newState = {
            ...state,
            indexData:action.payload
        }
        return newState
        default:
        return state
    }
}
export default indexReducer