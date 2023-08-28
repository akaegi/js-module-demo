module.exports = {
    // proxy: {
    //     '/api/*': 'http://url.of.prod.api/',
    // },
    // app: '/index-esm.html'
    publicPaths: {
        '/index-esm.html': 'index-esm.html',
        '/index-amd.html': 'index-amd.html',
        '/build': 'build',
        '/node_modules/requirejs': 'node_modules/requirejs',
        '/node_modules/dayjs': 'node_modules/dayjs'
    }
};