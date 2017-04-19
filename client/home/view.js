import React, { Component } from 'react'
import {Link} from 'react-router'


class HomeView extends Component {
	componentDidMount(){
		console.log(1231)
	}
    render() {
        return (
            <div className="fist">HomeView
            	<div className="section sec1" style={{backgroundColor:"#FFCCCC"}}>1</div>
				<div className="section sec2" style={{backgroundColor:"#4ACBF7"}}>2</div>
				<div className="section sec3" style={{backgroundColor:"#63E339"}}>3</div>
				<div className="section sec4" style={{backgroundColor:"#F7D34A"}}>4</div>
				<div className="section sec5" style={{backgroundColor:"#FF8ECE"}}>5</div>
				<div className="section sec6" style={{backgroundColor:"#ACDCED"}}>6</div>
				<div><Link to='/add'>add</Link></div>
			</div>

        )
    }
}

module.exports = HomeView
