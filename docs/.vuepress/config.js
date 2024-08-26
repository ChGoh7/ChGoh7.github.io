/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:40:39
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-08-26 17:16:25
 * @FilePath: \it-docs\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
    lang: 'zh-CN',
    locales: {
        '/': { lang: 'zh-CN', title: 'VuePress 博客', description: '我的第一个 VuePress 博客' },
        '/en/': { lang: 'en-US', title: 'VuePress Blog', description: 'My first VuePress Site' }
    },
    base: '/',
    theme: plumeTheme(),
    // theme: defaultTheme({
    //   logo: 'https://vuejs.press/images/hero.png',
    //   navbar: [
    //     // {
    //     //   text: 'JavaSE',
    //     //   link: '/JavaSE/',
    //     // },
    //     // {
    //     //   text: 'JavaEE',
    //     //   link: '/JavaEE/',
    //     // },
    //     // {
    //     //   text: '微服务',
    //     //   link: '/Microservices/',
    //     // },
    //     // {
    //     //   text: '前端',
    //     //   link: '/Frontend/',
    //     // },
    //     // {
    //     //   text: '开发工具',
    //     //   link: '/DevOps/',
    //     // },
    //     // {
    //     //   text: '其他',
    //     //   link: '/Others/',
    //     // },
    //     // {
    //     //   text: 'About',
    //     //   link: '/about-me',
    //     // },
    //     // {
    //     //   text: '我的博客',
    //     //   link: '/MyBlog/',
    //     // }
    //   ],
    // }),
    bundler: viteBundler(),
})
