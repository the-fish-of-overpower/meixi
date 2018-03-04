import React from "react"
import { Tabs} from 'antd-mobile';
import {isEmptyObject} from "../../utils/isEmptyObject"
import Swiper from "swiper/dist/js/swiper.min.js"
import "swiper/dist/css/swiper.min.css"
import "./index.scss"
import LazyLoad  from "react-lazyload"
import {Link} from "react-router"


const Tab = (props) => {
  console.log(props.indexData)
  const {indexData} = props
  var tabs 
  if(!isEmptyObject(props.indexData)){
    tabs = [
      { title: props.indexData.data[0].type, sub: '1' },
      { title: props.indexData.data[1].type, sub: '2' },
      { title: props.indexData.data[2].type, sub: '3' },
    ];
    return <div>
      <Tabs tabs={tabs}
        initialPage={0}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',minHeight:"3rem" }}>
          <IndexView
            indexData = {indexData}
            page = {0}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',minHeight:"3rem"  }}>
          <IndexView
            indexData = {indexData}
            page = {1}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff',minHeight:"3rem"  }}>
          <IndexView
            indexData = {indexData}
            page = {2}
          />
        </div>
      </Tabs>
    </div>
  }else{
    return <div></div>
  }
};

class IndexView extends React.Component{
  render(){
    const {indexData,page} = this.props
    var screenWidth = document.documentElement.clientWidth
    return <div>
              <div className = "swiper-container index-swiper" style = {{width:screenWidth}}>
                <div className = "swiper-wrapper">
                  {indexData.data[page].swipeImg.map((ele,index)=>{
                    return <div className = "swiper-slide" key = {index}>
                              <img src = {ele} alt = "" className = "swiper-img"/>
                            </div>
                  })}
                </div>
              </div>
              <div>
                <div className = "index-list">
                  {indexData.data[page].recommend.map((ele,index)=>{
                    return <LazyLoad height={300} key = {index}>
                            <Link to = {"/detail/"+ index}>
                              <img src = {ele} alt = ""/>
                            </Link>
                          </LazyLoad>
                  })}
                </div>
              </div>
            </div>
  }
  componentDidMount(){
    this.swiperInit()
  }
  swiperInit(){
    var mySwiper = new Swiper(".swiper-container")
  }
}

export {Tab}