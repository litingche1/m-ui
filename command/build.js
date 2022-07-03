const path = require('path')
const {defineConfig,build} = require('vite')
const vue =require('@vitejs/plugin-vue')
const vueJsx =require('@vitejs/plugin-vue-jsx')
//打包入口
const entryDir=path.resolve(__dirname,'../package')
//出口文件夹
const outDir=path.resolve(__dirname,'../lib')
//vite基础配置
const baseConfig=defineConfig({
    configFile:false,
    publicDir:false,
    plugins:[vue(),vueJsx()]
})

//rollup配置
const rollupOptions={
    external:['vue','vue-router'],
    output:{
        globals:{
            vue:'Vue'
        }
    }
}
//全量打包配置
const buildAll=async ()=>{
    await build({
        ...baseConfig,
        build:{
            rollupOptions,
            lib:{
                entry:path.resolve(entryDir,'index.ts'),
                name:'li-element-components',
                fileName:'li-element-components',
                formats:['es','umd']
            },
            outDir
        }
    })
}
//打包成库
const buildLib=async ()=>{
    await buildAll()
}

buildLib()