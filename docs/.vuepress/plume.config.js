/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:44:40
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-09-11 19:13:54
 * @FilePath: \it-docs\docs\.vuepress\plume.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNoteConfig, defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'

const javaSENote = defineNoteConfig({
    text: 'Java基础',
    dir: 'JavaSE/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/JavaSE/', // 声明笔记的链接前缀
    sidebar: 'auto'
})
const javaEENote = defineNoteConfig(
    {
        text: 'Java进阶',
        dir: 'JavaEE/', // 声明笔记的目录，相对于 `notes.dir`
        link: 'notes/JavaEE/', // 声明笔记的链接前缀
        sidebar: 'auto'
    }
)
const MicroservicesNote = defineNoteConfig({
    text: '微服务',
    dir: 'Microservices/',
    link: 'notes/Microservices/',
    sidebar: 'auto'
})
const DevOpsNote = defineNoteConfig(
    {
        text: '开发|运营工具',
        dir: 'DevOps/',
        link: 'notes/DevOps/',
        sidebar: 'auto'
    }
)
const ProjectNote = defineNoteConfig({
    text: '项目开发',
    dir: 'Project/',
    link: 'notes/Project/',
    sidebar: 'auto'
})
export default defineThemeConfig({
    logo: '/images/logo.png',
    // 在这里配置主题
    profile: {
        name: 'chwoo7',
        description: 'A programmer',
        avatar: '/images/avatar1.jpg',
        circle: true, // 是否为圆形头像,
    },
    navbar: navbar['zh-navbar'],
    notes: {
        dir: '/notes/', // 声明所有笔记的目录
        link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
        notes: [
            javaSENote, javaEENote, MicroservicesNote, DevOpsNote, ProjectNote
        ]
    },
    sidebar: {
        '/Discovery/Opensource/': [
            { text: '实战项目', link: '实战项目/' },
            { text: '系统设计',link: '系统设计/' },
            { text: '工具类库', link: '工具类库/' },
            { text: '开发工具', link: '开发工具/' },
        ]
    },
    //标题展示深度
    outline: 'deep',
    docsRepo: 'https://github.com/ChGoh7/ChGoh7.github.io',
    docsBranch: 'docs',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    //文档加密
    // encrypt: {
    //     rules: {
    //         '/notes/JavaSE': 'wu201495'
    //     }
    // },
})