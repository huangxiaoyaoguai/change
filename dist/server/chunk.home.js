exports.ids=[1],exports.modules={83:function(e,t){e.exports={main:"_1kxUQnCO",banner:"zEo6cw3B",banner_text:"_1Ju0Uv_p",bannerText:"_1Ju0Uv_p",b_text_top:"_2MeddSQ-",bTextTop:"_2MeddSQ-",b_text_bottom:"_7ix8FArX",bTextBottom:"_7ix8FArX",content:"_2lO_iEjL",contentList:"_2YIqo_k9",content_item:"_3Oe7uvxy",contentItem:"_3Oe7uvxy",item_title:"aVuYpLIl",itemTitle:"aVuYpLIl",item_tag:"XHMCpKO4",itemTag:"XHMCpKO4",item_introduction:"cixhyObV",itemIntroduction:"cixhyObV",item_time:"_9yTr8SUT",itemTime:"_9yTr8SUT",aboutinfo:"th2XKa8s",aboutinfo_tag:"_1lxtgvRT",aboutinfoTag:"_1lxtgvRT",tag_title:"_3Kk4j652",tagTitle:"_3Kk4j652",tag_content:"_2GL4T9gF",tagContent:"_2GL4T9gF",aboutinfo_me:"_2CU3st4r",aboutinfoMe:"_2CU3st4r",me_title:"_1_MOjubz",meTitle:"_1_MOjubz",me_pic:"_1TbLO0L-",mePic:"_1TbLO0L-",me_talk:"_2oOOpbEW",meTalk:"_2oOOpbEW",me_mail:"MgIYC4An",meMail:"MgIYC4An",mail_icon:"_3j2iq9Le",mailIcon:"_3j2iq9Le",weixinscancode:"_1h8MfuIV",imgcode:"_1smO8f8C",text:"_2BnyMqNo"}},182:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(28),m=n(r),s=a(29);a(83);var u=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={list:[]},a}return o(t,e),c(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;huch.get("/api/getlist",{},function(t){e.setState({list:t.data})})}},{key:"render",value:function(){return m.default.createElement("div",{className:"main"},m.default.createElement("div",{className:"banner animated fadeIn"},m.default.createElement("div",{className:"banner_text animated fadeIn"},m.default.createElement("div",{className:"b_text_top"},"HUCH"),m.default.createElement("div",{className:"b_text_bottom"},"始于前端，不止于前端"))),m.default.createElement("div",{className:"content clearfix animated fadeIn"},m.default.createElement("div",{className:"contentList fl"},this.state.list.map(function(e,t){return m.default.createElement(s.Link,{to:"/detail/"+e.id},m.default.createElement("div",{className:"content_item hvr-underline-from-center animated fadeIn"},m.default.createElement("div",{className:"item_title"},e.title),m.default.createElement("div",{className:"item_tag"},e.tags.length&&e.tags.map(function(e,t){return m.default.createElement("span",{className:"hvr-float-shadow"},e)})),m.default.createElement("div",{className:"item_introduction"},e.desc),m.default.createElement("div",{className:"item_time"},"createBy ",e.creat_time)))})),this.state.list.length?m.default.createElement("div",{className:"aboutinfo fl"},m.default.createElement("div",{className:"aboutinfo_tag"},m.default.createElement("div",{className:"tag_title"},"TAGS"),m.default.createElement("div",{className:"tag_content"},m.default.createElement("span",{className:"hvr-grow"},"知乎"),m.default.createElement("span",{className:"hvr-grow"},"前段开发"),m.default.createElement("span",{className:"hvr-grow"},"开始"),m.default.createElement("span",{className:"hvr-grow"},"html"),m.default.createElement("span",{className:"hvr-grow"},"知道"),m.default.createElement("span",{className:"hvr-grow"},"github"))),m.default.createElement("div",{className:"aboutinfo_me"},m.default.createElement("div",{className:"me_title"},"ABOUT"),m.default.createElement("div",{className:"me_pic"},m.default.createElement("img",{src:"//huchsite.oss-cn-shanghai.aliyuncs.com/light-up-shoes-for-women_4460x4460.jpg"})),m.default.createElement("div",{className:"me_talk"},m.default.createElement("div",null,"写写代码，做做设计"),m.default.createElement("div",null,"离开这个世界之前，一切都是过程")),m.default.createElement("div",{className:"me_mail"},m.default.createElement("a",{href:"http://weibo.com/2607995800/profile",target:"_blank",className:"hvr-grow-shadow iconfont mail_icon icon-weibo"}),m.default.createElement("a",{href:"https://github.com/huangxiaoyaoguai",target:"_blank",className:"hvr-grow-shadow iconfont mail_icon icon-git"}),m.default.createElement("a",{href:"mailto:921365631@qq.com",target:"_blank",className:"hvr-grow-shadow iconfont mail_icon icon-svg17"})),m.default.createElement("div",{className:"weixinscancode"},m.default.createElement("div",{className:"imgcode"}),m.default.createElement("div",{className:"text"},"微信扫一扫，打开小程序")))):null))}}]),t}(r.Component);e.exports=u}};