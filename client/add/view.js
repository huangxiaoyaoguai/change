import React, { Component } from 'react'
import {Link} from 'react-router'



class HomeView extends Component {
	constructor(props){
        super(props)
       
	}
	componentDidMount(){
        
	}
	
    render() {
        return (
            <div className="content">
            	qweqwrqweqweqwrqweqweqweqweqrqwq
                <div style={{"height":"500px","background":"red"}}>1212</div>
                <div><Link to='/'>home</Link></div>

			</div>

        )
    }
}

module.exports = HomeView
