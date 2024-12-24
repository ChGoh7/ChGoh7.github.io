/*
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-10-20 10:53:32
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-12-24 16:23:47
 * @FilePath: \ChGoh7.github.io\docs\.vuepress\client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'
import './styles/index.css'
export default defineClientConfig({
    layouts: {
        Layout,
    },
})