import React from "react"
import "./header.scss"
import {getHeaderInfoAction} from "../publicAction"
import {connect} from "react-redux"
import IScroll from "iscroll/build/iscroll-probe.js"

class CommonWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuStatus : false,
            menuIndex : -1,
            viewHeight : 0
        }
        this.menuOpenHandler = this.menuOpenHandler.bind(this)
        this.menuClickHandler = this.menuClickHandler.bind(this)
    }
    render(){
        const {menuStatus,menuIndex,viewHeight} = this.state
        const {menuData} = this.props
        const menuList = menuData.length?menuData.map(function(ele,index){
            var secHeight = ele.items.length * 0.81 + "rem"
            return <div key = {index}>
                        <div className = "public-menu-item" onClick = {()=>{this.menuClickHandler(index)}}>{ele.type}</div>
                        <div className = "public-menu-sec-box" style = {menuIndex === index?{height:secHeight}:{height:0}}>
                            {ele.items.map((el,ind)=>{
                                return <div className = "public-menu-sec-item" key = {ind}>{el}</div>
                            })}
                        </div>
                    </div>
        }.bind(this)):""
        return <div className = "public-commonWrapper">
                    <div className = "public-header" >
                        <div className = "public-menu-btn iconfont" onClick = {this.menuOpenHandler}>&#xe666;</div>
                        <div className = "public-other">
                            <div className = "public-other-item iconfont">&#xf0303;</div>
                            <div className = "public-other-item iconfont">&#xe61d;</div>
                        </div>
                        <h1 className = "public-logo">美西</h1>
                        <div className = "public-menu" style = {menuStatus?{left:0}:{left:"-90%"}}>
                            <div className = "public-menu-title">
                                <div className = "public-input-box">
                                    <input placeholder = "请输入商品关键词便于搜索" className = "public-menu-input" />
                                    <span className = "iconfont search-btn">&#xe62a;</span>
                                </div>
                                <div className = "public-menu-cancel" onClick = {this.menuOpenHandler}>X</div>
                            </div>
                            <div className = "public-menu-list">
                                <div className = "public-menu-item">首页</div>
                                {menuList}
                            </div>
                        </div> 
                    </div>
                    <div className = "public-shade" style = {menuStatus?{opacity:.5,visibility:"visible"}:{visibility:"hidden"}}></div>
                    <div className = "public-wrapper" style = {{height:viewHeight}} id = "public-wrapper">
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
    }
    componentDidMount(){
        this.props.dispatch(getHeaderInfoAction())
        this.wrapperIscrollInit()
    }
    menuOpenHandler(){
        this.setState({
            menuStatus:!this.state.menuStatus
        })
    }
    menuClickHandler(index){
        this.setState({
            menuIndex : index
        })
    }
    wrapperIscrollInit(){
        this.setState({
            viewHeight : document.documentElement.clientHeight/50 - 0.8 + "rem"
        },()=>{
            var wrapperScroll = new IScroll("#public-wrapper")
        })
    }
}

function mapState(state){
    return {
        menuData:state.publicReducer.menuData
    }
}

export default connect(mapState)(CommonWrapper)