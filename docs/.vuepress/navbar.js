/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:47:03
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-09-12 09:41:46
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
                        { text: 'JavaSE', link: 'JavaSE/' },
                        { text: 'JavaEE', link: 'JavaEE/' },
                        { text: '微服务', link: 'Microservices/' },
                        { text: '开发|运营工具', link: 'DevOps/' },
                        { text: '项目开发', link: 'Project/' },
                    ]
                },
                {
                    text: '其他',
                    prefix: 'Others/',
                    items: [
                        { text: 'markdown语法', link: 'markdown语法/' }
                    ]
                }
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
                    link: '后端/',
                },
                {
                    text: '前端',
                    icon: 'nimbus:browser',
                    link: '前端/',
                },
                {
                    text: '集成第三方服务',
                    icon: 'clarity:plugin-line',
                    link: '集成第三方服务/',
                }
            ]
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
                { text: '开源项目', icon: 'ri:open-source-fill', link: 'Opensource/' },
                {
                    text: '实用工具(站点/开源项目)', icon: 'carbon:tool-kit', link: 'MyTools/'
                },
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
            }, {
                text: 'Others',
                link: '/en/Others/'
            }
        ]
    }
)