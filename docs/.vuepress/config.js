/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-08-26 16:40:39
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-09-06 16:13:58
 * @FilePath: \it-docs\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
// import { webpackBundler } from '@vuepress/bundler-webpack'
export default defineUserConfig({
    port: 9092,
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
            },
            //本地搜索和algolia提供的搜索不能同时配置否则会覆盖algolia的搜索插件
            //默认是开启了本地搜索插件
            search: false,
            //搜索插件
            docsearch: {
                appId: '6UHIQ8YOAT',
                apiKey: 'ba57eb4f0385f95ebe4e4287fd4d4e27',
                indexName: 'chgoh7',
            }, readingTime: {
                wordPerMinute: 300
            },
            markdownEnhance: {
                hint: true, // 提示容器
                codetabs: true, // 代码组
                tabs: true, // 选项卡
                align: true, // 对齐容器
                mark: true, // 标记语法
                tasklist: true, // 任务列表语法
                attrs: true, // 属性语法
                sup: true, // 上标语法
                sub: true, // 下标语法
                alert: true, // GFM 通知语法
                footnote: true, // 注脚语法
                katex: true, // 数学公式

                // 以下可选项在 主题中默认不启用，
                // 请在主题中自行配置
                // include: true, // Markdown 导入支持
                // figure: true, // 启用图片 Figure 支持
                // imgLazyload: true, // 使用原生方式懒加载页面图片
                // imgMark: true, // 浅色/深色 图片标记
                // imgSize: true, // 图片尺寸支持
                // obsidianImgSize: true, // obsidian 图片尺寸支持
                // mathjax: true, //  Math Jax 数学公式 语法支持
                // chart: true, // 图表支持
                // echarts: true, // ECharts 图表支持
                // flowchart: true, // 流程图支持
                // markmap: true, // Markmap 图表支持
                // stylize: true, // 对行内语法进行样式化以创建代码片段
                // playground: true, // 交互演示
                // kotlinPlayground: true, // Kotlin 交互演示
                // vuePlayground: true, // Vue 交互演示
                // sandpack: true, // sandpack 交互演示
                // demo: true, // 代码案例
                // revealJs: true, // 幻灯片支持
            },
            // 支持各种语言代码高亮
            shiki: {
                languages: ["markdown", "js", "html", "java", "sql", "yaml", "cmd", "properties", "xml", "bash", "go", "c", "shell", "c++", "python", "javascript", "json", "awk", "vue", "css"],
            }
        }
    }),
    bundler: viteBundler()
})


