

//let { navEn, navZh, sidebarZh, sidebarEn } = require("./langulage-config.js");
module.exports = {
    //extend: '@vuepress/theme-default',
    base: '/', // 确保以斜杠开头和结尾
    dest: 'dist', // 指定输出目录，默认是 'dist'
    title: "博客",
    description: '一套为开发者学习准备的基于 Vue 2.0 的移动端和 PC 端组件库', // 描述，是主页副标题
    //显示行号
    markdown: {
        lineNumbers: true
    },
    //导航了logo
    themeConfig: {
        logo: '/images/title.png',
        //导航了链接
        // navbar: false, // 禁用所有页面的导航栏
        displayAllHeaders: true, //显示所有页面标题连接  默认值：false
        // activeHeaderLinks: false, // 默认值：true
        nav: [
            // { text: '首页', link: '/' },
            { text: 'JS', link: '/javascript/' },  //指向默认README.md文件
            { text: 'CSS', link: '/css/' },
            { text: 'NodeJS', link: '/node-js/NodeJS学习' },
            { text: 'Git', link: '/git/Git操作命令' },
            { text: 'Shell', link: '/shell/shell操作命令' },
        ],
        sidebar: {
            "/": [
                {
                    title: '首页',   // 必要的  
                    children: [
                        {
                            title: 'JS',   // 必要的  
                            children: [
                                '/javascript/',
                                '/javascript/闭包',
                                '/javascript/继承',
                                '/javascript/箭头函数与function区别',
                                '/javascript/严格模式和非严格模式下，this指向区别',
                            ]
                        },
                        {
                            title: 'CSS',   // 必要的  
                            children: [
                                '/css/',
                                '/css/initial、inherit、unset、revert',
                            ]
                        },
                        {
                            title: 'NodeJS',   // 必要的  
                            children: [
                                '/node-js/NodeJS学习',
                            ]
                        },
                        {
                            title: 'Git',   // 必要的  
                            children: [
                                '/git/Git操作命令',
                            ]
                        },
                        {
                            title: 'Shell',   // 必要的  
                            children: [
                                '/shell/shell操作命令',
                            ]
                        },
                        
                    ]
                },
                // {
                //     title: '首页1',   // 必要的  
                //     children: [
                //         {
                //             title: 'JS',   // 必要的  
                //             children: [
                //                 '/javascript/',
                //                 '/javascript/闭包',
                //                 '/javascript/继承',
                //                 '/javascript/箭头函数与function区别',
                //                 '/javascript/严格模式和非严格模式下，this指向区别',
                //             ]
                //         },
                //         {
                //             title: 'CSS',   // 必要的  
                //             children: [
                //                 '/css/initial、inherit、unset、revert',
                //             ]
                //         },
                //         {
                //             title: 'NodeJS',   // 必要的  
                //             children: [
                //                 '/node-js/NodeJS学习',
                //             ]
                //         },
                //         {
                //             title: 'Git',   // 必要的  
                //             children: [
                //                 '/git/Git操作命令',
                //             ]
                //         },
                //         {
                //             title: 'Shell',   // 必要的  
                //             children: [
                //                 '/shell/shell操作命令',
                //             ]
                //         },
                        
                //     ]
                // },
            ],
           


        },

    },
}





