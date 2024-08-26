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

export default defineThemeConfig({
    // 在这里配置主题
    profile: {
        name: 'chwoo7',
        description: 'A programmer',
        avatar: '/blogger.png',
        circle: true, // 是否为圆形头像
    },
    locales: {
        '/': {
            selectLanguageName: '简体中文',
            notes: {
                dir: '/notes/', // 声明所有笔记的目录
                link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
                notes: [
                    javaSENote, javaEENote
                ]
            },
            navbar: navbar['zh-navbar'],
        },
        '/en/': {
            selectLanguageName: '英文',
            notes: { link: '/en/', dir: '/en/notes/', notes: [] },
            navbar: navbar['en-navbar'],
        }
    },
})