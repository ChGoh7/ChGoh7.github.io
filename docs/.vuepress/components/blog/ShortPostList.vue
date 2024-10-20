<!--
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-10-20 11:14:38
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-10-20 12:50:12
 * @FilePath: \ChGoh7.github.io\docs\.vuepress\components\ShortPostList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script  setup>
import VPLink from '@theme/VPLink.vue'

defineProps({
  postList:[]
})
</script>

<template>
  <ul class="vp-blog-short-post-list">
    <li v-for="post in postList" :key="post.path" class="time-line-before">
            <p class="post-title">
                <VPLink class="post-link" :href="post.path">
                {{ post.title }}
                </VPLink>
            </p>
            <span class="post-time">{{ post.createTime }}</span>
    </li>
  </ul>
</template>

<style scoped>
.vp-blog-short-post-list {
  display: flex;
  flex-direction: column;
  /* gap: 8px; */
  margin-top: 24px;
}

.vp-blog-short-post-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--vp-c-text-1);
  transition: color var(--vp-t-color);
  /* 自定义的 */
  border-left: 2px solid #27272a;
  position: relative;
  text-indent: 2em;
  padding: 8px;
  perspective: 100px;
}
/* 自定义的 */
.time-line-before::before{
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--vp-c-text-1);
}

.time-line-before:hover::before{
  font-weight: 500;
  width: 9px;
  height: 9px;
  background-color: var(--vp-c-brand-1);
  transition: all .3s;
}


.vp-blog-short-post-list .post-title {
  display: -webkit-box;
  flex: 1;
  margin-right: 14px;
  overflow: hidden;
  font-weight: 600;
  transition: all var(--vp-t-color);

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  /* 自定义 */
  font-weight: 200;
}



.vp-blog-short-post-list .post-time {
  color: var(--vp-c-text-3);
  transition: color var(--vp-t-color);
}


.vp-blog-short-post-list li:hover .post-title {
  transform: translateZ(4px);
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.vp-blog-short-post-list li:hover .post-time {
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>