if (typeof require.ensure !== 'function') {
    require.ensure = function(dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [{
        path: '/',
        // component: require('./common/main'),
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

