import React, { Children,Component,cloneElement } from 'react'
import {Link} from 'react-router'

import Header from './head'

import './index.less'



class HomeView extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
        }
    }
	componentDidMount(){
	}
   
    render() {
        const {children, ...props} = this.props
        return (
            <div className="main">
                <Header pathname={props.location.pathname} />

                {Children.map(children, child =>
                    cloneElement(child, {...props})
                )}
            	
			</div>

        )
    }
}

module.exports = HomeView
