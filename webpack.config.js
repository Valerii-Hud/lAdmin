module.exports = {
     mode: 'development',
     devtool: 'source-map',   
     watch: false,
     output: {
         filename: 'script.js',
     },
     module: {
         rules: [
             {
                 test: /\.m?js$/,
                 exclude: /(node_modules|bower_components)/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: [['@babel/preset-env',
                             {
                                 debug: true,
                                 corejs: 3,
                                useBuiltIns: "usage",
                             }],
                             '@babel/react']
                     }
                 }
             }
         ]
     }

 };

