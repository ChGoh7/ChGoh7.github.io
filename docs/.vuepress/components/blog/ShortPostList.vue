<!--
 * @Author: chgoh7 3180349973@qq.com
 * @Date: 2024-10-20 11:14:38
 * @LastEditors: chgoh7 3180349973@qq.com
 * @LastEditTime: 2024-12-24 13:48:50
 * @FilePath: \ChGoh7.github.io\docs\.vuepress\components\ShortPostList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script  setup>
import VPLink from '@theme/VPLink.vue'
import { ref,onMounted } from 'vue'
const prop = defineProps({
  postList:Array
})
const  timelineRef = ref(null)
const postTitleRef = ref(null)

function renderTimeLine(){
for (let i = 0; i < postTitleRef.value.length; i++) {
  postTitleRef.value[i].addEventListener('mouseenter',()=>{
    timelineRef.value[i].classList.add('time-line-before-hover')
  })
  postTitleRef.value[i].addEventListener('mouseleave',()=>{
    timelineRef.value[i].classList.remove('time-line-before-hover')
  })
}
}
onMounted(()=>{
  renderTimeLine()
})
</script>

<template>
  <ul class="vp-blog-short-post-list">
    <li v-for="post in postList" :key="post.path" ref="timelineRef" class="time-line-before">
            <p class="post-title" ref="postTitleRef">
                <VPLink class="post-link" :href="post.path">
                {{ post.title }}
                </VPLink>
                <div class="post-underline"></div>
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
  border-left: 2px solid var(--vp-c-text-3);
  position: relative;
  text-indent: 2em;
  padding: 8px;
  perspective: 100px;
}
.post-link{
  display: block;
  width: 100%;
}

/* 自定义的 */
.time-line-before::before{
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 8px;
    height: 8px;
    /*贴在2px的border中间*/
    margin-left: -1px;
    border-radius: 50%;
    background-color: var(--vp-c-text-1);
}
 .time-line-before-hover:before{
  font-weight: 500;
  width: 8px;
  height: 16px;
  border-radius: 10px;
  background-color: var(--vp-c-brand-1);
  transition: all .3s;
}
@keyframes time-line-border-b-ani{
  /* 实现底部边框从左到右渐渐出现 */
  0%{
    width: 0;
  }
  100%{
    width: 100%;
  }
}


.post-title:hover .post-underline{
  position: absolute;
  left: 14px;
  bottom:0;
  height: 2px;
  background-color:  var(--vp-c-brand-1);
  animation: time-line-border-b-ani  1s ease-in-out;
  animation-fill-mode: forwards;
}


  /* border-bottom: 2px dotted var(--vp-c-text-3); */
.vp-blog-short-post-list .post-title {
  position: relative;
  display: -webkit-box;
  flex: 1;
  margin-right: 14px;
  overflow: hidden;
  font-weight: 600;
  transition: all var(--vp-t-color);

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  font-weight: 200;
}

.vp-blog-short-post-list .post-time {
  color: var(--vp-c-text-3);
  transition: color var(--vp-t-color);
}


.post-title:hover {
  transform: translateZ(4px);
  font-weight: 500;
  color: var(--vp-c-brand-1);
}

.post-title:hover .post-time {
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>