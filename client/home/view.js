import React, { Component } from 'react'
import {Link} from 'react-router'

import './index.less';



class HomeView extends Component {
	componentDidMount(){
		console.log(1231)
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

                        <div className="content_item hvr-underline-from-center">
                            <div className="item_title">网站第一篇文章</div>
                            <div className="item_tag">
                                <span className="hvr-float-shadow">js</span>
                                <span className="hvr-float-shadow">html</span>
                                <span className="hvr-float-shadow">node</span>
                            </div>
                            <div className="item_introduction">骄傲山东矿机按时打卡好伐啦看似简单埃里克森就打了看似简单阿斯利康解放路卡接收到垃圾，索拉卡涉及到快乐货收到了阿法拉科技给谁看好看哈萨克斯安静伐开森发哈伦裤圣诞节啊</div>
                            <div className="item_time">createBy 2017-04-15</div>
                        </div>

                        <div className="content_item hvr-underline-from-center">
                            <div className="item_title">网站第一篇文章</div>
                            <div className="item_tag">
                                <span className="hvr-float-shadow">js</span>
                                <span className="hvr-float-shadow">html</span>
                                <span className="hvr-float-shadow">node</span>
                            </div>
                            <div className="item_introduction">骄傲山东矿机按时打卡好伐啦看似简单埃里克森就打了看似简单阿斯利康解放路卡接收到垃圾，索拉卡涉及到快乐货收到了阿法拉科技给谁看好看哈萨克斯安静伐开森发哈伦裤圣诞节啊</div>
                            <div className="item_time">createBy 2017-04-15</div>
                        </div>

                    </div>
                    <div className="aboutinfo fl">
                        <div className="aboutinfo_tag">
                            <div className="tag_title">TAGS</div>
                            <div className="tag_content">
                                <span className="hvr-grow">知乎</span>
                                <span className="hvr-grow">前段开发</span>
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
                        </div>
                    </div>
                </div>
				<div><Link to='/add'>add</Link></div>
			</div>

        )
    }
}

module.exports = HomeView
