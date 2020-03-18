
const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  outputDir:path.resolve(__dirname,'../www'),
  indexPath:'index.html',
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
　　　　
}
    
  // },
  // rules:[
  //   {
  //     test: /\.(gql|graphql)$/,
  //     loader: 'graphql-tag/loader'
  //   },
  // ]
}
