if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        // component: require('./home/view'),
        indexRoute: {
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./home/view'))
                }, 'home')
            }
        },
        childRoutes: [
        {
            path: 'add',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./add/view'))
                }, 'add')
            }
        },
        {
            path: 'detail/*',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./detail/view'))
                }, 'detail')
            }
        }
        ]
    }]
}

export default routes

// import React from 'react'
// import { Route, IndexRoute, Redirect } from 'react-router'

// import HomeView from '../client/home/view'

// import Pageindex from '../client/add/view'



// module.exports = (
//     <Route path='/' component={HomeView} >
//         <IndexRoute component={Pageindex} />
//         <Route path='home' component={HomeView}></Route>
//         <Route path='add' component={Pageindex}></Route>







//     </Route>
// )
