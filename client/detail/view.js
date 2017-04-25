import React, { Component } from 'react'
import {Link} from 'react-router'

import './index.less';



class HomeView extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }

    }
    getData(){
        var param = this.props.params.splat;
        var that = this;
        console.log(param)
        huch.get("/api/getDetail",
            {id:param},
            function(res){
                console.log(res)
                if(res.code==0){
                    that.setState({
                        data:res.data
                    })
                }

            })

    }
	componentDidMount(){
        this.getData();
	}
    render() {
        var data = this.state.data;
        return (
            <div className="detail">
                <div className="detail_pic"></div>

                <div className="detail_content">
                {
                    // <div className="de_source">
                    //     文章转载于<a target="_blank" href="www.badu.com">大前端</a>
                    // </div>
                }
                    <div className="de_c_title">{data.title}</div>
                    <div className="de_c_tag">
                    {
                        data.tags&&data.tags.map(function(ele,i){
                            return <span className="hvr-float-shadow">{ele}</span>
                        })
                    }
                    </div>
                    <div className="de_c_time">
                        createBy {data.creat_time}
                    </div>
                    
                    <div className="de_c_main" dangerouslySetInnerHTML={{__html:data.data}}>

                    </div>

                </div>

			</div>

        )
    }
}

module.exports = HomeView
