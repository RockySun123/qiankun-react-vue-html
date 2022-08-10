const { defineConfig } = require('@vue/cli-service')
const {name}=require('./package.json')
const publicPath=`/${name}`

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath,
  devServer:{
    headers:{
      'Access-Control-Allow-Origin':'*'
    },
    port:4200
  },
  configureWebpack:{
    output:{
      library:process.env.NODE_ENV==='development'?`${name}-[name]`: name,
      libraryTarget:'umd',
      chunkLoadingGlobal:`webpackJsonp_${name}`
    }
  }
})
