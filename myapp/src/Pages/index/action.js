import {GET_INDEX_INFO} from "./actionTypes"
import {utilFetch} from "../../utils/fetchPackage"

function actionCreator(type,data){
    return {
        type,
        payload:data
    }
}

function getIndexInfoAction(){
    return (dispatch)=>{
        utilFetch("/api/index")
            .then(data=>{
                dispatch(actionCreator(GET_INDEX_INFO,data))
            })
            .catch((res)=>{
                console.log("get index info error")
            })
    }
}

export {getIndexInfoAction}