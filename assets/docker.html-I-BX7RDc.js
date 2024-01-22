import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c as l,b as a,d as n,e as t,a as o}from"./app-XLQq2rP-.js";const c={},r=a("h2",{id:"golang-1-19",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#golang-1-19","aria-hidden":"true"},"#"),n(" golang 1.19")],-1),d={href:"http://hub.bilibili.co/nyx-compile/bili-golang:1.19.7",target:"_blank",rel:"noopener noreferrer"},u=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM debian:11
RUN <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/deb.debian.org/mirrors.ustc.edu.cn/g&#39;</span> /etc/apt/sources.list <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
       <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span> <span class="token function">wget</span> bsdiff libpcre++-dev graphviz  gcc <span class="token function">git</span> <span class="token function">make</span> jq <span class="token function">unzip</span> <span class="token parameter variable">-y</span>

RUN <span class="token builtin class-name">cd</span> /opt/ <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> go1.19.linux-amd64.tar.gz http://jssz-boss.bilibili.co/nyx-nas/maxinlin/65c2238e13216eab517fe9511e64a62a-go1.19.7.linux-amd64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">tar</span> xf /opt/go1.19.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">rm</span> <span class="token parameter variable">-fr</span> /opt/go1.19.linux-amd64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /go/src/go-common/

<span class="token comment"># update gopher</span>
ADD http://artifactory.bilibili.co/artifactory/ops/gopher /usr/local/bin/
RUN <span class="token function">chmod</span> +x /usr/local/bin/gopher

ENV <span class="token environment constant">PATH</span> /usr/local/go/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.21</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM hub.bilibili.co/nyx-base/debian:11
RUN <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/deb.debian.org/mirrors.ustc.edu.cn/g&#39;</span> /etc/apt/sources.list <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
       <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span> <span class="token function">wget</span> bsdiff libpcre++-dev graphviz  gcc <span class="token function">git</span> <span class="token function">make</span> jq <span class="token function">unzip</span> <span class="token parameter variable">-y</span>

RUN <span class="token builtin class-name">cd</span> /opt/ <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> go1.21.0.linux-amd64.tar.gz http://jssz-boss.bilibili.co/nyx-nas/wangjianbin03/560a1cac9e64499721b0fe84d6eb0361-go1.21.0.linux-amd64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">tar</span> xf /opt/go1.21.0.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">rm</span> <span class="token parameter variable">-fr</span> /opt/go1.21.0.linux-amd64.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /go/src/go-common/

<span class="token comment"># update gopher</span>
ADD http://artifactory.bilibili.co/artifactory/ops/gopher /usr/local/bin/
RUN <span class="token function">chmod</span> +x /usr/local/bin/gopher

ENV <span class="token environment constant">PATH</span> /usr/local/go/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># BuildWithCover = on 生成带有覆盖率统计功能的镜像</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BuildWithCover</span><span class="token operator">=</span>on
<span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span>
<span class="token comment">#set -e</span>
<span class="token comment">#set -o pipefail</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /go/src/go-code
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> <span class="token variable">$Code_root</span>/* /go/src/go-code/

<span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>http://goproxy.bilibili.co
/usr/local/go/bin/go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOSUMDB</span><span class="token operator">=</span>off
<span class="token builtin class-name">cd</span> /go/src/go-code/

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;/go/src/go-code/app/<span class="token variable">$self_arg</span>/cmd&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">cd</span> /go/src/go-code/app/<span class="token variable">$self_arg</span>/cmd
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;不存在目录：go-code/app/&quot;</span> <span class="token variable">$self_arg</span><span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

<span class="token function">curl</span> <span class="token parameter variable">-o</span> /tmp/kratos-check http://artifactory.bilibili.co/artifactory/wangxu01/kratos-check
<span class="token function">chmod</span> +x /tmp/kratos-check
/tmp/kratos-check /go/src/go-code/
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;构建失败！&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;版本检查通过&quot;</span>

/usr/local/go/bin/go build <span class="token parameter variable">-o</span> <span class="token variable">$App_name</span> <span class="token parameter variable">-ldflags</span> <span class="token string">&quot;-X google.golang.org/protobuf/reflect/protoregistry.conflictPolicy=warn&quot;</span>
<span class="token function">cp</span> <span class="token parameter variable">-f</span> <span class="token variable">$App_name</span> <span class="token variable">$workdir</span>/release/<span class="token variable">$App_name</span>/
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;构建失败！&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>


<span class="token comment"># 增加带测试覆盖率功能的包编译,生产的镜像添加后缀“-cover”</span>
<span class="token comment"># 有疑问或问题请联系 测试中心/工程效率部/Higkoo</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$BuildWithCover</span> <span class="token operator">=</span> <span class="token string">&quot;on&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$REVISION</span>
   <span class="token function">mkdir</span> cover <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$workdir</span>/release/cover/<span class="token variable">$App_name</span>/
  <span class="token function">curl</span> <span class="token parameter variable">-o</span> /tmp/gopher http://uat-boss.bilibili.co/gopher/gopher
  <span class="token function">chmod</span> +x /tmp/gopher
   <span class="token assign-left variable">REVISION</span><span class="token operator">=</span><span class="token variable">$REVISION</span> /tmp/gopher build <span class="token builtin class-name">.</span> <span class="token parameter variable">--coverpkg</span> <span class="token punctuation">..</span>/<span class="token punctuation">..</span>. <span class="token parameter variable">-o</span> cover/<span class="token variable">$App_name</span> --add-version <span class="token parameter variable">--ldflags</span> <span class="token string">&#39;-X google.golang.org/protobuf/reflect/protoregistry.conflictPolicy=warn&#39;</span> <span class="token parameter variable">--goroot</span> /usr/local/go/
   <span class="token function">cp</span> <span class="token parameter variable">-f</span> cover/<span class="token variable">$App_name</span> <span class="token variable">$workdir</span>/release/cover/<span class="token variable">$App_name</span>/
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;未构建覆盖率测试包..&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;构建成功！&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行dockerfile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM hub.bilibili.co/compile/bili-golang:base
RUN <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash qa <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash rd <span class="token operator">&amp;&amp;</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash gt

ARG app_name

RUN <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/app/<span class="token variable">\${app_name}</span> <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/log/<span class="token variable">\${app_name}</span> <span class="token punctuation">\\</span>
 <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /data/conf/<span class="token variable">\${app_name}</span>

ADD http://bvc-nerve.bilibili.co/ipipfile/stable_v6_flagship.ipdb /data/conf/v6.ipdb
<span class="token comment">#ADD http://bvc-nerve.bilibili.co/ipipfile/stable_v4_flagship.ipdb /data/conf/v4.ipdb</span>
RUN <span class="token function">wget</span> <span class="token parameter variable">-O</span> /data/conf/v4.ipdb http://bvc-nerve.bilibili.co/ipipfile/stable_v4_flagship.ipdb

<span class="token comment">#RUN wget -O /data/conf/v6.ipdb  http://bvc-nerve.bilibili.co/ipipfile/stable_v6_flagship.ipdb &amp;&amp; \\</span>
<span class="token comment">#      wget -O /data/conf/v4.ipdb http://bvc-nerve.bilibili.co/ipipfile/stable_v4_flagship.ipdb</span>

COPY release/* /data/app/<span class="token variable">\${app_name}</span>
RUN <span class="token function">mv</span> /background.sh /bak_background.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(b,m){const s=p("ExternalLinkIcon");return i(),l("div",null,[r,a("p",null,[a("a",d,[n("hub.bilibili.co/nyx-compile/bili-golang:1.19.7"),t(s)])]),u])}const f=e(c,[["render",v],["__file","docker.html.vue"]]);export{f as default};
