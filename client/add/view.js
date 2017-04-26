import React, { Component } from 'react'
import {Link} from 'react-router'

import './index.less';




class HomeView extends Component {
	constructor(props){
        super(props)
        this.state={
            tagvalue:"",
            title:"",
            desc:"",

            process:0,
            imgpath:"",
            isimgpath:-1
        }
       
	}
    componentWillMount() {

    }
	componentDidMount(){
        huch.loadScript('/common/editor/wangEditor.js',function(){
            var editor = new wangEditor('editor');
            editor.config.uploadImgUrl = '/upimage';
            editor.create();
        })
        
	}
    updata(e){
        var html = $('#editor').html();
        console.log(html)
        var state = this.state;
         huch.post("/api/add",
            {
                title:state.title,
                tag:state.tagvalue,
                desc:state.desc,
                text:html,
                imgpath:state.imgpath,
                time:new Date().getTime()
            },
            function(res){
                console.log(res)
            })

    }
    inputChange(type,e){
        console.log(1231,type)
        var val = e.target.value;
        console.log(val)
        var state = this.state;
        console.log(state)
        state[type] = val
        this.setState({})

    }
    upimg(e){
        console.log(e.target.files)

        var that = this;
        var files = e.target.files;
        if(!files.length){
            return
        }
        var formData = new FormData();
        formData.append('upload', files[0]);
         var xhr = new XMLHttpRequest();
        xhr.open('POST', '/upimage');

        xhr.upload.onprogress = function (event) {
        　　　　if (event.lengthComputable) {
        　　　　　　var complete = (event.loaded / event.total * 100 | 0);
                    that.setState({
                        isimgpath:0,
                        process:complete
                    })
        　　　　　　
        　　　　}
        　　};

        xhr.onload = function () {
　　　　　　if (xhr.status === 200) {
　　　　　　　　console.log('上传成功');
                console.log(xhr.response);
                that.setState({
                    imgpath:xhr.response,
                    isimgpath:1
                })
　　　　　　} else {
　　　　　　　　console.log('出错了');
　　　　　　}
　　　　};
　　　　xhr.send(formData);

    }
	
    render() {
        var isimgpath = this.state.isimgpath;
        return (
            <div className="add_detail">
                <div className="add_con clearfix">
                    <div className="add_input fl">
                        <div className="add_title">
                            <span className="tit_name">标题:</span>
                            <input defaultValue={this.state.tagvalue} onChange={this.inputChange.bind(this,'title')} />
                        </div>
                        <div className="add_tag">
                            <span className="tag_name">标签:</span>
                            <input defaultValue={this.state.tagvalue} onChange={this.inputChange.bind(this,'tagvalue')} />
                        </div>
                        <div className="add_desc">
                            <span className="desc_name">简介:</span>
                            <textarea defaultValue={this.state.tagvalue} onChange={this.inputChange.bind(this,'desc')} />
                        </div>
                    </div>
                    <div className="add_img fl">
                        {isimgpath==-1?"封面图片上传":(isimgpath==0?this.state.process+"%":<span><img src={this.state.imgpath}/></span>)}
                        <input type="file" onChange={this.upimg.bind(this)} />
                    </div>
                </div>

                <div id="editor" style={{"min-height":"500px"}}></div>

                <div className="upHtml" onClick={this.updata.bind(this)}>提交</div>

			</div>

        )
    }
}

module.exports = HomeView
