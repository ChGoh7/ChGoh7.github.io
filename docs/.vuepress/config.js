/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:40:39
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-08-29 11:58:13
 * @FilePath: \it-docs\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
    title: 'chgoh7的文档&blog',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    lang: 'zh-CN',
    base: '/',
    theme: plumeTheme(),
    bundler: viteBundler(),
    description: 'chgoh7的文档&blog，记录知识文档和日常博客',

})
