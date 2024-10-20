/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:44:40
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-10-15 20:30:57
 * @FilePath: \it-docs\docs\.vuepress\plume.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineNoteConfig, defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'


const JavaNote = defineNoteConfig({
    text: 'Java相关',
    dir: 'Java/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/Java/', // 声明笔记的链接前缀
    sidebar: 'auto'
})

const frameworkNote = defineNoteConfig({
    text: '常用框架',
    dir: 'Frameworks/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/Frameworks/', // 声明笔记的链接前缀
    sidebar: 'auto'
})
const DataBasesNote = defineNoteConfig({
    text: '数据库',
    dir: 'Databases/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/Databases/', // 声明笔记的链接前缀
    sidebar: 'auto'
})


const DistributedNote = defineNoteConfig({
    text: '分布式',
    dir: '分布式/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/分布式/', // 声明笔记的链接前缀
    sidebar: 'auto'
})


const HPNote = defineNoteConfig({
    text: '高性能',
    dir: '高性能/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/高性能/', // 声明笔记的链接前缀
    sidebar: 'auto'
})

const HANote = defineNoteConfig({
    text: '高可用',
    dir: '高可用/', // 声明笔记的目录，相对于 `notes.dir`
    link: 'notes/高可用/', // 声明笔记的链接前缀
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
const ProjectGuideNote = defineNoteConfig({
    text: '项目开发指导',
    dir: 'ProjectGuide/',
    link: 'notes/ProjectGuide/',
    sidebar: 'auto'
})

const frontEndNote = defineNoteConfig({
    text: '前端',
    dir: 'frontend/',
    link: 'notes/frontend/',
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
            JavaNote, frameworkNote, DataBasesNote, DistributedNote, HPNote, HANote, DevOpsNote, ProjectGuideNote, frontEndNote
        ]
    },
    sidebar: {
        'Memorandum/': [
            { text: '备忘录', link: '/Memorandum/' },
            { text: 'nodejs', link: 'nodejs/' },
            { text: 'github', link: 'github/' },
            { text: 'dos', link: 'dos/' }
        ],
        'BookStack/': [
            { text: '书栈', link: '/BookStack/' },
            {
                text: '认知思维篇', prefix: '认知思维篇/', items: [
                    {
                        text: '金字塔原理', link: '金字塔原理/'
                    }
                ]
            },
        ],
        '/Discovery/Opensource/': [
            { text: '简介', link: 'index' },
            { text: '实战项目', link: '实战项目/' },
            { text: '系统设计', link: '系统设计/' },
            { text: '工具类库', link: '工具类库/' },
            { text: '开发工具', link: '开发工具/' },
            { text: '实用工具和插件', link: '实用工具和插件/' }
        ],
        '/Discovery/Solutions/': [
            {
                text: '编程相关', prefix: 'programming/', items: [
                    {
                        text: '关于编程', link: '/Discovery/Solutions/programming/'
                    },
                    {
                        text: 'Java', link: 'java/'
                    },
                    { text: 'apache', link: 'apache/' }
                    ,
                    {
                        text: 'GitHub', link: 'github/'
                    },
                    {
                        text: 'Node.js', link: 'nodejs/'
                    },
                    {
                        text: 'MySQL', link: 'mysql/'
                    }
                ]
            }, {
                text: '工作相关', prefix: 'work/', collapsed: true, items: [
                    {
                        text: '关于工作', link: '/Discovery/Solutions/work/',
                    },
                    {
                        text: '面试', link: 'interview/',
                    },
                    {
                        text: '远程工作', link: 'remote-job/'
                    },
                ]
            },
            {
                text: '思维模型相关', prefix: 'mental-model/', collapsed: true, items: [
                    {
                        text: '关于思维模型', link: '/Discovery/Solutions/mental-model/',
                    },
                    {
                        text: '人际和领导力', link: 'interpersonal&leadship/',
                    }, {
                        text: '学习和创新力', link: 'learning&innovation/'
                    }
                ]
            },
            {
                text: 'Markdown写作', link: 'markdown/'
            },
        ],
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
    blog: {
        // 配置 封面图 布局位置
        // postCover: 'left', // 'left' | 'right' | 'odd-left' | 'odd-right' | 'top'
        postCover: {
            layout: 'left',
            ratio: '16:9',
            width: 300,
            compact: true
        },
        categoriesExpand: 0,
        tagsTheme: 'colored'
    }
})