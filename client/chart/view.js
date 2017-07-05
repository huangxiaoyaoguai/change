var FusionCharts = require("fusioncharts");

import React, { Component } from 'react'
import {Link} from 'react-router'




class HomeView extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{}
        }

    }
	componentDidMount(){

		var myChart = new FusionCharts({
	        "type": "column2d",
	   "width": "500",
	   "height": "300",
	   "dataFormat": "json",
	   "dataSource": {
		    chart:{},
		    data: [{value: 500}, {value: 600}, {value: 700}]
	 	}
   		}).render("detail");

    // Render the chart.
    // myChart.render();
	}
    render() {
        var data = this.state.data;
        return (
            <div id="detail">
            asdasfasda
              
			</div>

        )
    }
}

module.exports = HomeView
