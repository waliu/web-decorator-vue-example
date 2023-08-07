const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugins.delete('fork-ts-checker');
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                return {...options, 'transpileOnly': false}
            });
    },
    lintOnSave:false
})
