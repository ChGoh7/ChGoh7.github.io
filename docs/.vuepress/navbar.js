/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:47:03
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-08-27 00:06:31
 * @FilePath: \it-docs\docs\.vuepress\navbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNavbarConfig } from "vuepress-theme-plume";
import { linksPlugin } from "vuepress/markdown";
export default defineNavbarConfig(
    {
        'zh-navbar': [{
            text: '首页',
            link: '/'
        }, {
            text: '博客',
            link: '/blog/'
        }, {
            text: '文档库',
            prefix: '/notes/',
            items: [
                {
                    text: 'Java相关',
                    items: [
                        { text: 'JavaSE', link: 'JavaSE/' },
                        { text: 'JavaEE', link: 'JavaEE/' },
                        { text: '微服务', link: 'Microservices/' },
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
        }, {
            text: '开发|运营工具',
            link: '/notes/DevOps/'
        },
        {
            text: '探索',
            prefix: '/Discovery/',
            items: [
                { text: '我的工具', link: 'MyTools/' }
            ]
        }, {
            text: '友链',
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