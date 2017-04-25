import React, { Component } from 'react'
import {Link} from 'react-router'

import './index.less';




class HomeView extends Component {
	constructor(props){
        super(props)
        this.state={
            tagvalue:"",
            title:"",
            desc:""
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
        console.log(state)
        var data = {
                        title:state.title,
                        tag:state.tagvalue,
                        desc:state.desc,
                        text:html
                    };
                    console.log(data)
         huch.post("/api/add",
            {
                title:state.title,
                tag:state.tagvalue,
                desc:state.desc,
                text:html,
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
	
    render() {
        return (
            <div className="add_detail">
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

                <div id="editor" style={{"min-height":"500px"}}></div>

                <div className="upHtml" onClick={this.updata.bind(this)}>提交</div>

			</div>

        )
    }
}

module.exports = HomeView
