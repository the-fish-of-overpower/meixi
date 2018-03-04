import React from "react"
import {browserHistory} from "react-router"
import {connect} from "react-redux"

function Auth(WrappedComponent){
    class HocComponent extends React.Component{
        constructor(props){
            super(props)
            console.log(this.props.auth)
            if(!this.props.auth){
                browserHistory.push("/detail/0")
            }
        }
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
    function mapState(state){
        return {
            auth:state.publicReducer.token
        }
    }
    return connect(mapState)(HocComponent)
}

export default Auth



