import React, { Component } from 'react'
import {Link} from 'react-router'




class HomeView extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
        }
    }
	componentDidMount(){

	}
   
    render() {
        var pathname = this.props.pathname;
        var fontcolor = pathname=="/"?"#fff":"#333";
        var list = [
        {
            path:'/',
            name:'首页',
        },
        {
            path:'/specially',
            name:'图库',

        }

        ]
        return (
            <div className="head" style={{'color':fontcolor}}>
                <ul className="clearfix">
                    <li className="indexName libuyfont">huch</li>
                    {
                        list.map(function(ele,i){
                            return <Link to={ele.path}><li className={"hvr-float-shadow "+(pathname==ele.path?"select":"")} style={{'color':fontcolor}}>{ele.name}</li></Link>
                        })
                    }
                    

                </ul>

            	
			</div>

        )
    }
}

module.exports = HomeView
