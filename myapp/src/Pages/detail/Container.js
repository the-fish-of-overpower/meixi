import React from "react"

export default class DetailPage extends React.Component{
    render(){
        return <div>{this.props.params.id}</div>
    }
}