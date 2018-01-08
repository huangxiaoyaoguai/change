import React, { Component } from 'react'
import {Link} from 'react-router'

import './index.less';



class HomeView extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
        }
    }
	componentDidMount(){
        this.getData();
        //   var timing = window.performance.timing;
        // var DNStime = timing.domainLookupEnd - timing.domainLookupStart;

        // var tcpTime = timing.connectEnd - timing.connectStart;

        // var restime = timing.responseEnd - timing.responseStart;

        // var domtime = timing.domComplete - timing.domInteractive;
        // console.log(timing,DNStime,tcpTime,restime,domtime)
	}
    getData(){
        var that = this;
        huch.get("/api/getlist",{},
            function(res){
                that.setState({
                    list:res.data
                })

            })
    }
    render() {
        return (
            <div className="main">
            	<div className="banner animated fadeIn">
            		<div className="banner_text animated fadeIn">
            			<div className="b_text_top">HUCH</div>
            			<div className="b_text_bottom">始于前端，不止于前端</div>
            		</div>
            	</div>
                <div className="content clearfix animated fadeIn">
                    <div className="contentList fl">

                        {
                            this.state.list.map(function(ele,i){
                                return <Link to={'/detail/'+ele.id}>
                                    <div className="content_item hvr-underline-from-center animated fadeIn">
                                            <div className="item_title">{ele.title}</div>
                                            <div className="item_tag">
                                                {
                                                    ele.tags.length&&ele.tags.map(function(item,n){
                                                        return <span className="hvr-float-shadow">{item}</span>
                                                    })
                                                }
                                            </div>
                                            <div className="item_introduction">{ele.desc}</div>
                                            <div className="item_time">createBy {ele.creat_time}</div>
                                        </div>
                                        </Link>
                            })
                        }


                    </div>
                    {!!this.state.list.length && <div className="aboutinfo fl">
                        <div className="aboutinfo_tag">
                            <div className="tag_title">TAGS</div>
                            <div className="tag_content">
                                <span className="hvr-grow">知乎</span>
                                <span className="hvr-grow">前端开发</span>
                                <span className="hvr-grow">开始</span>
                                <span className="hvr-grow">html</span>
                                <span className="hvr-grow">知道</span>
                                <span className="hvr-grow">github</span>

                            </div>
                        </div>
                        <div className="aboutinfo_me">
                            <div className="me_title">ABOUT</div>
                            <div className = "me_pic">
                                <img src="//huchsite.oss-cn-shanghai.aliyuncs.com/light-up-shoes-for-women_4460x4460.jpg" />
                            </div>
                            <div className="me_talk">
                                <div>写写代码，做做设计</div>
                                <div>离开这个世界之前，一切都是过程</div>
                            </div>
                            <div className="me_mail">
                                <a href="http://weibo.com/2607995800/profile" target="_blank" className="hvr-grow-shadow iconfont mail_icon icon-weibo"></a>
                                <a href="https://github.com/huangxiaoyaoguai" target="_blank" className="hvr-grow-shadow iconfont mail_icon icon-git"></a>
                                <a href="mailto:921365631@qq.com" target="_blank" className="hvr-grow-shadow iconfont mail_icon icon-svg17"></a>

                            </div>
                            <div className="weixinscancode">
                                <div className="imgcode"></div>
                                <div className="text">微信扫一扫，打开小程序</div>
                            </div>
                        </div>
                    </div>}
                </div>
			</div>

        )
    }
}

module.exports = HomeView
