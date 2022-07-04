module.exports = {
    lintOnSave:false,
    // 代理服务器
    devServer:{
        proxy:{
            '/api':{ 
                target:'http://39.98.123.211',
       
            }
        }
    }
}