import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-D0hIwZe2.js";const t={},l=e(`<h2 id="mac-软件问题修复" tabindex="-1"><a class="header-anchor" href="#mac-软件问题修复"><span>mac 软件问题修复</span></a></h2><h3 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装"><span>软件安装</span></a></h3><p>允许任何安装源</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> spctl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --master-disable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开时提示：xxx.app已损坏，无法打开，您应该将它移到废纸篓，需要给文件赋予安全性设置</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xattr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> com.apple.quarantine</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /Applications/Sublime</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Text.app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="证书过期" tabindex="-1"><a class="header-anchor" href="#证书过期"><span>证书过期</span></a></h3><p>如果出现打开应用，提示无法打开，签名后可以打开</p><p>第一步，执行命令</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codesign</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --deep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --sign</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /Applications/V2rayU.app</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> codesign</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --deep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --sign</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> -</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /Users/zhou/.V2rayU/V2rayUTool</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在应用程序中找到 V2rayU，右键，显示简介，勾选覆盖恶意软件保护</p><h3 id="v2rayutool-频繁要求输入密码" tabindex="-1"><a class="header-anchor" href="#v2rayutool-频繁要求输入密码"><span>V2RayUTool 频繁要求输入密码</span></a></h3><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /Applications/V2rayU.app/Contents/Resources</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cmd.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),n=[l];function h(r,p){return s(),a("div",null,n)}const c=i(t,[["render",h],["__file","soft-install.html.vue"]]),k=JSON.parse('{"path":"/tech/mac/soft-install.html","title":"mac soft install skills","lang":"zh-CN","frontmatter":{"title":"mac soft install skills","date":"2023-05-25T07:10:00.000Z","category":"Mac","tag":["soft","install","codesign"],"description":"mac 软件问题修复 软件安装 允许任何安装源 打开时提示：xxx.app已损坏，无法打开，您应该将它移到废纸篓，需要给文件赋予安全性设置 证书过期 如果出现打开应用，提示无法打开，签名后可以打开 第一步，执行命令 第二步，在应用程序中找到 V2rayU，右键，显示简介，勾选覆盖恶意软件保护 V2RayUTool 频繁要求输入密码","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/mac/soft-install.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"mac soft install skills"}],["meta",{"property":"og:description","content":"mac 软件问题修复 软件安装 允许任何安装源 打开时提示：xxx.app已损坏，无法打开，您应该将它移到废纸篓，需要给文件赋予安全性设置 证书过期 如果出现打开应用，提示无法打开，签名后可以打开 第一步，执行命令 第二步，在应用程序中找到 V2rayU，右键，显示简介，勾选覆盖恶意软件保护 V2RayUTool 频繁要求输入密码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-12T04:18:25.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"soft"}],["meta",{"property":"article:tag","content":"install"}],["meta",{"property":"article:tag","content":"codesign"}],["meta",{"property":"article:published_time","content":"2023-05-25T07:10:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-12T04:18:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mac soft install skills\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-25T07:10:00.000Z\\",\\"dateModified\\":\\"2023-08-12T04:18:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"mac 软件问题修复","slug":"mac-软件问题修复","link":"#mac-软件问题修复","children":[{"level":3,"title":"软件安装","slug":"软件安装","link":"#软件安装","children":[]},{"level":3,"title":"证书过期","slug":"证书过期","link":"#证书过期","children":[]},{"level":3,"title":"V2RayUTool 频繁要求输入密码","slug":"v2rayutool-频繁要求输入密码","link":"#v2rayutool-频繁要求输入密码","children":[]}]}],"git":{"createdTime":1685006763000,"updatedTime":1691813905000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":4}]},"readingTime":{"minutes":0.57,"words":171},"filePathRelative":"tech/mac/soft-install.md","localizedDate":"2023年5月25日","excerpt":"","autoDesc":true}');export{c as comp,k as data};