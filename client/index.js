import React from 'react'
import {render} from 'react-dom'
import {Router, match, browserHistory} from 'react-router'
import routes from './routes'


match({history: browserHistory, routes}, (error, redirectLocation, renderProps) => {
    render(
            <Router {...renderProps}/>,
        document.getElementById('root')
    )
})



// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Router,browserHistory } from 'react-router'
// // import { createHistory } from 'history'
// import routes from './routes'


// // import { browserHistory } from 'react-router'

// // import '../style/index.less'

// // const historyConfig = { basename: '' }
// // const history = useRouterHistory(createHistory)(historyConfig)

// console.log(browserHistory)

// $(function(){
//     ReactDOM.render(<Router history={browserHistory,routes}>{ routes }</Router>, document.getElementById('root'))
// })
