/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:40:39
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-08-30 16:47:45
 * @FilePath: \it-docs\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
// import { webpackBundler } from '@vuepress/bundler-webpack'
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'chgoh7的文档&blog',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    base: '/',
    theme: plumeTheme({
        plugins: {
            comment: {
                provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
                comment: false,
                repo: 'ChGoh7/ChGoh7.github.io',
                repoId: 'R_kgDOMoXr5A',
                category: 'General',
                categoryId: 'DIC_kwDOMoXr5M4CiBdm',
                darkTheme: 'dark',
                lightTheme: 'light'
            },
            //内嵌pdf支持
            markdownPower: {
                pdf: true,
            }
        }
    }),
    bundler: viteBundler()
})
