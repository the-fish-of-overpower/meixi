import React from "react"
import {Tab} from "./View"
import {connect} from "react-redux"
import {getIndexInfoAction} from "./action"

class IndexWrapper extends React.Component{
    render(){
        const{indexData} = this.props
        return <Tab
                    indexData = {indexData}
                />
    }
    componentDidMount(){
        this.props.dispatch(getIndexInfoAction())
    }
}

function mapState(state){
    return {
        indexData:state.indexReducer.indexData
    }
}

export default connect(mapState)(IndexWrapper)