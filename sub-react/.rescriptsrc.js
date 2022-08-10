const {name}=require('./package.json')

module.exports={
    webpack:(config)=>{
        //这些选项将入口起点的返回值（例如，入口起点的任何导出值），在 bundle 包所引入的位置，赋值给 output.library 提供的变量名。
        config.output['library']=process.env.NODE_ENV==='development'?`${name}-[name]`:name;
        config.output['libraryTarget']='umd';
        //webpack 使用全局变量来加载块
        config.output['chunkLoadingGlobal']=`webpackJsonp_${name}`
        config.output.globalObject='window'

        //需要设置publicPath
        if(process.env.NODE_ENV==='production'){
            config.output.publicPath='/sub-react'
        }
        //去掉"ModuleScopePlugin"插件，可以使react加载外部资源
        const scopePluginIndex=config.resolve.plugins.findIndex(({constructor})=>{
            return constructor&&constructor.name==="ModuleScopePlugin"
        })
        config.resolve.plugins.splice(scopePluginIndex,1)

        return config
    },
    devServer:(config)=>{
        config.headers={
            'Access-Control-Allow-Origin': '*',
        }
        return config
    }
}