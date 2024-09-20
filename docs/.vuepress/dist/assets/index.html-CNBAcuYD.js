import{_ as s,c as i,o as e,a}from"./app-DDPPmttC.js";const n={},l=a(`<blockquote><p>CI CD</p></blockquote><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p>下述的指南基于以下条件：</p><ul><li><p>Markdown 源文件放置在你项目的 <code>docs</code> 目录；</p></li><li><p>使用的是默认的构建输出目录 (<code>.vuepress/dist</code>) ；</p></li><li><p>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a> 作为包管理器，当然也支持使用 npm 或 yarn 。</p></li><li><p>VuePress 作为项目依赖安装，并在 <code>package.json</code> 中配置了如下脚本：</p><p>{ &quot;scripts&quot;: { &quot;docs:build&quot;: &quot;vuepress build docs&quot; } }</p></li></ul><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages"><span>GitHub Pages</span></a></h2><ol><li><p>设置正确的 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a> 选项。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/</code> ，你可以省略这一步，因为 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></li><li><p>选择你想要使用的 CI 工具。这里我们以 <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a> 为例。</p><p>创建 <code>.github/workflows/docs.yml</code> 文件来配置工作流。</p></li></ol><p>点击展开配置样例</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  push</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    branches</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 手动触发部署</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  workflow_dispatch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">jobs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  docs</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    runs-on</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    steps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          fetch-depth</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Setup pnpm</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm/action-setup@v2</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 选择要使用的 pnpm 版本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 8</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 使用 pnpm 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          run_install</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Setup Node.js</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 选择要使用的 node 版本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          node-version</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 缓存 pnpm 依赖</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          cache</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 运行构建脚本</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Build VuePress site</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 查看 workflow 的文档来获取更多信息</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      -</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        uses</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> crazy-max/ghaction-github-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        with</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 部署到 gh-pages 分支</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          target_branch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gh-pages</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          build_dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docs/.vuepress/dist</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        env</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">          GITHUB_TOKEN</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> \${{ secrets.GITHUB_TOKEN }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提示</p><p>请参考 <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">GitHub Pages 官方指南</a> 来获取更多信息。</p><h2 id="gitlab-pages" tabindex="-1"><a class="header-anchor" href="#gitlab-pages"><span>GitLab Pages</span></a></h2><ol><li><p>设置正确的 <a href="https://v2.vuepress.vuejs.org/zh/reference/config.html#base" target="_blank" rel="noopener noreferrer">base</a> 选项。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/</code> ，你可以省略这一步，因此 <code>base</code> 默认就是 <code>&quot;/&quot;</code> 。</p><p>如果你准备发布到 <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code> ，也就是说你的仓库地址是 <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code> ，则将 <code>base</code> 设置为 <code>&quot;/&lt;REPO&gt;/&quot;</code>。</p></li><li><p>创建 <code>.gitlab-ci.yml</code> 文件来配置 <a href="https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/" target="_blank" rel="noopener noreferrer">GitLab CI</a> 工作流。</p></li></ol><p>点击展开配置样例</p><pre><code># 选择你要使用的 docker 镜像
image: node:18-buster

pages:
  # 每当 push 到 main 分支时触发部署
  only:
    - main

  # 缓存 node_modules
  cache:
    key:
      files:
        - pnpm-lock.yaml
    paths:
      - .pnpm-store

  # 安装 pnpm
  before_script:
    - curl -fsSL https://get.pnpm.io/install.sh | sh -
    - pnpm config set store-dir .pnpm-store

  # 安装依赖并运行构建脚本
  script:
    - pnpm install --frozen-lockfile
    - pnpm docs:build --dest public

  artifacts:
    paths:
      - public
</code></pre><p>提示</p><p>请参考 [GitLab Pages 官方指南](https://docs.gitlab.com/ce/user/project/pages/ target=) 来获取更多信息。</p><h2 id="google-firebase" tabindex="-1"><a class="header-anchor" href="#google-firebase"><span>Google Firebase</span></a></h2><ol><li><p>请确保你已经安装了 <a href="https://www.npmjs.com/package/firebase-tools" target="_blank" rel="noopener noreferrer">firebase-tools</a>。</p></li><li><p>在你项目的根目录下创建 <code>firebase.json</code> 和 <code>.firebaserc</code>，并包含以下内容：</p></li></ol><p><code>firebase.json</code>:</p><pre><code>{
  &quot;hosting&quot;: {
    &quot;public&quot;: &quot;./docs/.vuepress/dist&quot;,
    &quot;ignore&quot;: []
  }
}
</code></pre><p><code>.firebaserc</code>:</p><pre><code>{
  &quot;projects&quot;: {
    &quot;default&quot;: &quot;&lt;YOUR_FIREBASE_ID&gt;&quot;
  }
}
</code></pre><ol start="3"><li>在执行了 <code>pnpm docs:build</code> 后, 使用 <code>firebase deploy</code> 指令来部署。</li></ol><p>提示</p><p>请参考 <a href="https://firebase.google.com/docs/cli" target="_blank" rel="noopener noreferrer">Firebase CLI 官方指南</a> 来获取更多信息。</p><h2 id="heroku" tabindex="-1"><a class="header-anchor" href="#heroku"><span>Heroku</span></a></h2><ol><li><p>首先安装 <a href="https://devcenter.heroku.com/articles/heroku-cli" target="_blank" rel="noopener noreferrer">Heroku CLI</a>；</p></li><li><p><a href="https://signup.heroku.com" target="_blank" rel="noopener noreferrer">在这里</a> 注册一个 Heroku 账号；</p></li><li><p>运行 <code>heroku login</code> 并填写你的 Heroku 认证信息：</p><p>heroku login</p></li><li><p>在你的项目根目录中，创建一个名为 <code>static.json</code> 的文件，并包含下述内容：</p></li></ol><p><code>static.json</code>:</p><pre><code>{
  &quot;root&quot;: &quot;./docs/.vuepress/dist&quot;
}
</code></pre><p>这里是你项目的配置，请参考 <a href="https://github.com/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a> 来获取更多信息。</p><h2 id="kinsta" tabindex="-1"><a class="header-anchor" href="#kinsta"><span>Kinsta</span></a></h2><p>请查看 <a href="https://kinsta.com/docs/vuepress-application/" target="_blank" rel="noopener noreferrer">Set Up VuePress on Kinsta</a> 。</p><h2 id="edgio" tabindex="-1"><a class="header-anchor" href="#edgio"><span>Edgio</span></a></h2><p>请查看 <a href="https://docs.edg.io/guides/vuepress" target="_blank" rel="noopener noreferrer">Edgio Documentation &gt; Framework Guides &gt; VuePress</a> 。</p><h2 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify"><span>Netlify</span></a></h2><ol><li><p>前往 <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a> ，从 GitHub 创建一个新项目，并进行如下配置：</p><ul><li><strong>Build Command:</strong> <code>pnpm docs:build</code></li><li><strong>Publish directory:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>设置 <a href="https://docs.netlify.com/configure-builds/environment-variables" target="_blank" rel="noopener noreferrer">Environment variables</a> 来选择 Node 版本：</p><ul><li><code>NODE_VERSION</code>: 18</li></ul></li><li><p>点击 deploy 按钮。</p></li></ol><h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel"><span>Vercel</span></a></h2><ol><li><p>前往 <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a> ，从 GitHub 创建一个新项目，并进行如下配置：</p><ul><li><strong>FRAMEWORK PRESET:</strong> <code>Other</code></li><li><strong>BUILD COMMAND:</strong> <code>pnpm docs:build</code></li><li><strong>OUTPUT DIRECTORY:</strong> <code>docs/.vuepress/dist</code></li></ul></li><li><p>点击 deploy 按钮。</p></li></ol><h2 id="云开发-cloudbase" tabindex="-1"><a class="header-anchor" href="#云开发-cloudbase"><span>云开发 CloudBase</span></a></h2><p><a href="https://cloudbase.net/?site=vuepress" target="_blank" rel="noopener noreferrer">云开发 CloudBase</a> 是一个云原生一体化的 Serverless 云平台，支持静态网站、容器等多种托管能力，并提供简便的部署工具 <a href="https://cloudbase.net/framework.html?site=vuepress" target="_blank" rel="noopener noreferrer">CloudBase Framework</a> 来一键部署应用。</p><ol><li><p>全局安装 CloudBase CLI ：</p><p>pnpm install -g @cloudbase/cli</p></li><li><p>在项目根目录运行以下命令一键部署 VuePress 应用，在部署之前可以先 <a href="https://console.cloud.tencent.com/tcb/env/index?tdl_anchor=ad&amp;tdl_site=vuejs" target="_blank" rel="noopener noreferrer">开通环境</a>：</p><p>cloudbase init --without-template cloudbase framework:deploy</p></li></ol><p>CloudBase CLI 首先会跳转到控制台进行登录授权，然后将会交互式进行确认。</p><p>确认信息后会立即进行部署，部署完成后，可以获得一个自动 SSL，CDN 加速的网站应用，你也可以搭配使用 GitHub Action 来持续部署 GitHub 上的 VuePress 应用。</p><p>也可以使用 <code>cloudbase init --template vuepress</code> 快速创建和部署一个新的 VuePress 应用。</p><p>提示</p><p>更多详细信息请查看 CloudBase Framework 的[部署项目示例](https://github.com/TencentCloudBase/cloudbase-framework?site=vuepress target=)</p><h2 id="_21-云盒子" tabindex="-1"><a class="header-anchor" href="#_21-云盒子"><span>21 云盒子</span></a></h2><p>请查看 [21 云盒子 - 部署一个 VuePress 静态网页](https://www.21yunbox.com/docs/ target=)。</p>`,48),t=[l];function p(r,h){return e(),i("div",null,t)}const o=s(n,[["render",p],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/notes/DevOps/dbjoi0yj/","title":"部署方式","lang":"zh-CN","frontmatter":{"title":"部署方式","createTime":"2024/08/26 19:17:05","permalink":"/notes/DevOps/dbjoi0yj/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"GitHub Pages","slug":"github-pages","link":"#github-pages","children":[]},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages","link":"#gitlab-pages","children":[]},{"level":2,"title":"Google Firebase","slug":"google-firebase","link":"#google-firebase","children":[]},{"level":2,"title":"Heroku","slug":"heroku","link":"#heroku","children":[]},{"level":2,"title":"Kinsta","slug":"kinsta","link":"#kinsta","children":[]},{"level":2,"title":"Edgio","slug":"edgio","link":"#edgio","children":[]},{"level":2,"title":"Netlify","slug":"netlify","link":"#netlify","children":[]},{"level":2,"title":"Vercel","slug":"vercel","link":"#vercel","children":[]},{"level":2,"title":"云开发 CloudBase","slug":"云开发-cloudbase","link":"#云开发-cloudbase","children":[]},{"level":2,"title":"21 云盒子","slug":"_21-云盒子","link":"#_21-云盒子","children":[]}],"readingTime":{"minutes":4.09,"words":1228},"git":{"createdTime":1724673366000,"updatedTime":1724673366000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"notes/DevOps/其他/部署方式.md"}`);export{o as comp,c as data};
