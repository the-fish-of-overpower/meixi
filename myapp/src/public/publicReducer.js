import {GET_HEADER_INFO} from "./publicActionTypes"
const defaultState = {
    menuData:"",
    token:"1"
}

function publicReducer(state = defaultState,action){
    switch(action.type){
        case GET_HEADER_INFO:
        var newState = {
            ...state,
            menuData:action.payload
        }
        return newState
        default:
        return state
    }
}

export default publicReducer