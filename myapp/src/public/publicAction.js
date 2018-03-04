import {GET_HEADER_INFO} from "./publicActionTypes"
import {utilFetch} from "../utils/fetchPackage"

function actionCreator(type,data){
    return {
        type,
        payload:data
    }
}

function getHeaderInfoAction(){
    return dispatch=>{
        utilFetch("http://localhost:3000/api/public/header")
        .then(data=>{
            dispatch(actionCreator(GET_HEADER_INFO,data.data))
        })
        .catch(data=>{
            console.log("get public menu info error")
        })
    }
}

export {getHeaderInfoAction}