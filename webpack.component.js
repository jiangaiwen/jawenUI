const { VueLoaderPlugin } = require('vue-loader');
const path = require('path')
const glob = require('glob');
const list = {};

async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`); //dirPath下所有index.js路径的数组
    
    for (let file of files) {
        const component = file.split(/[/.]/)[2]; //获取组件name
        list[component] = `./${file}`;
    }
}

makeList('components/lib', list)

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js', //输出文件名
        path: path.resolve(__dirname, 'dist'), //输出目录
        library: 'mui', //配置到该字段下
        libraryTarget: 'umd' //打包成umd模块
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
};