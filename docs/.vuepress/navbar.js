/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:47:03
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-10-14 15:06:44
 * @FilePath: \it-docs\docs\.vuepress\navbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNavbarConfig } from "vuepress-theme-plume";
export default defineNavbarConfig(
    {
        'zh-navbar': [{
            text: '首页',
            icon: 'material-symbols:home-outline',
            link: '/'
        }, {
            text: '博客',
            icon: 'icomoon-free:blog',
            link: '/blog/'
        }, {
            text: '我的文档库',
            icon: 'gala:file-document',
            prefix: '/notes/',
            items: [
                {
                    text: '后端',
                    icon: 'ri:java-fill',
                    items: [
                        { text: 'Java相关', link: 'Java/' },
                        { text: '数据库', link: 'Databases/' },
                        { text: '常用框架', link: 'Frameworks/' },
                        { text: '系统设计', link: '系统设计/' },
                        { text: '分布式', link: '分布式/' },
                        { text: '高可用', link: '高可用/' },
                        { text: '高性能', link: '高性能/' },
                        { text: '开发|运营工具', link: 'DevOps/' },
                        { text: '项目开发指导', link: 'ProjectGuide/' },
                    ]
                },
                {
                    text: '前端',
                    icon: 'flowbite:html-solid',
                    items: [
                        { text: '前端基础', link: '前端/前端基础/' },
                        { text: '前端框架', link: '前端/前端框架/' },
                        { text: '前端框架', link: '前端/前端框架/' }
                    ]
                },
            ]
        },
        {
            text: '互联网文档',
            icon: 'mdi:web',
            prefix: '/Webdocs/',
            items: [
                {
                    text: '后端',
                    icon: 'mynaui:servers',
                    link: 'backend/',
                },
                {
                    text: '前端',
                    icon: 'nimbus:browser',
                    link: 'frontend/',
                }
            ]
        },
        {
            text: '书栈',
            icon: 'mingcute:book-line',
            link: 'BookStack/'
        },
        {
            text: '备忘录',
            icon: 'ep:memo',
            link: 'Memorandum/'
        },
        {
            text: '探索',
            icon: 'carbon:ibm-watson-discovery',
            prefix: '/Discovery/',
            items: [
                { text: '解决方案', icon: 'ant-design:solution-outlined', link: 'Solutions/' },
                {
                    text: '实用工具', icon: 'carbon:tool-kit', link: 'MyTools/'
                },
                { text: '开源项目', icon: 'ri:open-source-fill', link: 'Opensource/' },
                { text: 'fav', icon: 'material-symbols:favorite', link: 'Favorite/' }
            ]
        }, {
            text: '友链',
            icon: 'ph:link',
            link: '/Friends/'
        },
        ],
        'en-navbar': [
            {
                text: 'Home',
                link: '/en/'
            }, {
                text: 'Blog',
                link: '/en/blog/'
            }, {
                text: 'Java Related',
                prefix: '/en/notes/',
                items: [
                    { text: 'JavaSE', link: 'JavaSE/' },
                    { text: 'JavaEE', link: 'JavaEE/' },
                    { text: 'Microservices', link: 'Microservices/' }
                ]
            }
        ]
    }
)