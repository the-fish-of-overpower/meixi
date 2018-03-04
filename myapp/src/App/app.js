import React from "react"
import {Router,Route,browserHistory,IndexRoute} from "react-router"
import CommonWrapper from "../public/Header/Container"
import {Provider} from "react-redux"
import store from "../store/store"
import "./border.scss"
import "./reset.scss"
import IndexWrapper from "../Pages/index/Container"
import DetailPage from "../Pages/detail/Container"
import Auth from "../Pages/Auth/auth"
import CartPage from "../Pages/cart/Container"

const Cart = Auth(CartPage)

export default class App extends React.Component{
    render(){
        return (<Provider store = {store}>
                    <Router history = {browserHistory}>
                        <Route path = "/" component = {CommonWrapper}>
                            <IndexRoute component = {IndexWrapper}></IndexRoute>
                            <Route path = "detail/:id" component = {DetailPage}></Route>
                            <Route path = "cart" component = {Cart}></Route>
                        </Route>
                    </Router>
                </Provider>)
    }
}