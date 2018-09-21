const path = require("path");

module.exports = {
    entry:"./app/assets/scripts/App.js",
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"
    },
    
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[ {
                    loader: 'babel-loader',
                    /*options: {
                        presets: ['@babel/preset-env']
                    }*/


               
                    
                }
            ]

            },

        ]


    /*
    module:{
       // loaders
       rules:[
        {
            loader:'babel-loader',
            query:{
                //presets:['es2015']
            },
            test:/\.js$/,
            exclude: /node_modules/
         }

       ]
     }*/
 
  }
} 
