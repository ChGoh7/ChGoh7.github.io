/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:44:40
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-08-29 09:35:34
 * @FilePath: \it-docs\docs\.vuepress\plume.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'

const javaSENote = {
    text: 'Java基础',
    dir: 'JavaSE/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/JavaSE/', // 声明笔记的链接前缀
    sidebar: 'auto'
}
const javaEENote = {
    text: 'Java进阶',
    dir: 'JavaEE/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/JavaEE/', // 声明笔记的链接前缀
    sidebar: 'auto'
}
const DevOpsNote = {
    text: '开发|运营工具',
    dir: 'DevOps/',
    link: 'notes/DevOps/',
    sidebar: 'auto'
}

export default defineThemeConfig({
    logo: '/images/logo.png',
    // 在这里配置主题
    profile: {
        name: 'chwoo7',
        description: 'A programmer',
        avatar: '/images/avatar1.jpg',
        circle: true, // 是否为圆形头像
    },
    notes: {
        dir: '/notes/', // 声明所有笔记的目录
        link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
        notes: [
            javaSENote, javaEENote, DevOpsNote
        ]
    },
    navbar: navbar['zh-navbar'],
    docsRepo: 'https://github.com/ChGoh7/ChGoh7.github.io',
    docsBranch: 'docs',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    plugins: {
        comment: {
            provider: 'Giscus', // "Artalk“ | "Giscus" | "Twikoo" | "Waline"
            comment: true,
            repo: 'ChGoh7/it-docs-comment',
            repoId: 'R_kgDOMpwR7A',
            category: 'General',
            categoryId: 'DIC_kwDOMpwR7M4CiBWo',
            // darkTheme: 'dark',
            // lightTheme: 'light'
        }
    }
})
