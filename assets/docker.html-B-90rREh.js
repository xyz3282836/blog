import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as n}from"./app-CgwETBFd.js";const l={},h=n(`<h2 id="golang-1-19" tabindex="-1"><a class="header-anchor" href="#golang-1-19"><span>golang 1.19</span></a></h2><p>hub.bilibili.co/nyx-compile/bili-golang:1.19.7</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> debian:11</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/deb.debian.org/mirrors.ustc.edu.cn/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">       apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bsdiff</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libpcre++-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graphviz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go1.19.linux-amd64.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://jssz-boss.bilibili.co/nyx-nas/maxinlin/65c2238e13216eab517fe9511e64a62a-go1.19.7.linux-amd64.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/go1.19.linux-amd64.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/go1.19.linux-amd64.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-common/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># update gopher</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://artifactory.bilibili.co/artifactory/ops/gopher</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/gopher</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/go/bin:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.21</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hub.bilibili.co/nyx-base/debian:11</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/deb.debian.org/mirrors.ustc.edu.cn/g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt/sources.list</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">       apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bsdiff</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libpcre++-dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> graphviz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  gcc</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jq</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> go1.21.0.linux-amd64.tar.gz</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://jssz-boss.bilibili.co/nyx-nas/wangjianbin03/560a1cac9e64499721b0fe84d6eb0361-go1.21.0.linux-amd64.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    tar</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/go1.21.0.linux-amd64.tar.gz</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    rm</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/go1.21.0.linux-amd64.tar.gz</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-common/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># update gopher</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://artifactory.bilibili.co/artifactory/ops/gopher</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin/gopher</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PATH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/go/bin:</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$PATH</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建脚本</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># BuildWithCover = on 生成带有覆盖率统计功能的镜像</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> BuildWithCover</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">on</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -x</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#set -e</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#set -o pipefail</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-code</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $Code_root</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-code/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> GO111MODULE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">on</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> GOPROXY</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">://</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">goproxy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">bilibili</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">co</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/local/go/bin/go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> env</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GOSUMDB=off</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-code/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;/go/src/go-code/app/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$self_arg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/cmd&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ];</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-code/app/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$self_arg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/cmd</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;不存在目录：go-code/app/&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $self_arg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp/kratos-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://artifactory.bilibili.co/artifactory/wangxu01/kratos-check</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp/kratos-check</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/tmp/kratos-check</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /go/src/go-code/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -ne</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;构建失败！&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;版本检查通过&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/local/go/bin/go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $App_name</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ldflags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;-X google.golang.org/protobuf/reflect/protoregistry.conflictPolicy=warn&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $App_name</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $workdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/release/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$App_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$?</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -ne</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;构建失败！&quot;</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">exit</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 增加带测试覆盖率功能的包编译,生产的镜像添加后缀“-cover”</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 有疑问或问题请联系 测试中心/工程效率部/Higkoo</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$BuildWithCover</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;on&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ];</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">   echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $REVISION</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $workdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/release/cover/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$App_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp/gopher</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://uat-boss.bilibili.co/gopher/gopher</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  chmod</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> +x</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp/gopher</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   REVISION</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$REVISION</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> /tmp/gopher</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --coverpkg</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ../...</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cover/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$App_name</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --add-version</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --ldflags</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;-X google.golang.org/protobuf/reflect/protoregistry.conflictPolicy=warn&#39;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --goroot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/go/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   cp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cover/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$App_name</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $workdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/release/cover/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$App_name</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">   echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;未构建覆盖率测试包..&quot;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fi</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;构建成功！&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行dockerfile</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hub.bilibili.co/compile/bili-golang:base</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> qa</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> rd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bin/bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ARG</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/app/</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app_name</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/log/</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app_name</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/conf/</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app_name</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://bvc-nerve.bilibili.co/ipipfile/stable_v6_flagship.ipdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/conf/v6.ipdb</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#ADD http://bvc-nerve.bilibili.co/ipipfile/stable_v4_flagship.ipdb /data/conf/v4.ipdb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/conf/v4.ipdb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> http://bvc-nerve.bilibili.co/ipipfile/stable_v4_flagship.ipdb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#RUN wget -O /data/conf/v6.ipdb  http://bvc-nerve.bilibili.co/ipipfile/stable_v6_flagship.ipdb &amp;&amp; \\</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#      wget -O /data/conf/v4.ipdb http://bvc-nerve.bilibili.co/ipipfile/stable_v4_flagship.ipdb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">COPY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> release/</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/app/</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app_name</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /background.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bak_background.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),k=[h];function p(t,e){return s(),a("div",null,k)}const g=i(l,[["render",p],["__file","docker.html.vue"]]),c=JSON.parse('{"path":"/tech/bilibili/docker.html","title":"docker应用镜像","lang":"zh-CN","frontmatter":{"title":"docker应用镜像","date":"2023-09-13T11:46:00.000Z","category":"docker","tag":["docker"],"description":"golang 1.19 hub.bilibili.co/nyx-compile/bili-golang:1.19.7 1.21 构建脚本 运行dockerfile","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/bilibili/docker.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"docker应用镜像"}],["meta",{"property":"og:description","content":"golang 1.19 hub.bilibili.co/nyx-compile/bili-golang:1.19.7 1.21 构建脚本 运行dockerfile"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-15T05:28:29.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2023-09-13T11:46:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-15T05:28:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker应用镜像\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-13T11:46:00.000Z\\",\\"dateModified\\":\\"2023-09-15T05:28:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"golang 1.19","slug":"golang-1-19","link":"#golang-1-19","children":[]}],"git":{"createdTime":1694755709000,"updatedTime":1694755709000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"tech/bilibili/docker.md","localizedDate":"2023年9月13日","excerpt":"","autoDesc":true}');export{g as comp,c as data};