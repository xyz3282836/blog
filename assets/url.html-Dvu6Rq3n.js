import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as r,o}from"./app-BNnaAp_K.js";const a={};function l(s,e){return o(),i("div",null,e[0]||(e[0]=[r('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><strong>统一资源定位符</strong>(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。</p><p>统一资源定位符的标准格式如下:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[协议类型]://[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>统一资源定位符的完整格式如下:</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[协议类型]://[访问资源需要的凭证信息]@[服务器地址]:[端口号]/[资源层级UNIX文件路径][文件名]?[查询]#[片段ID]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多详情请见 <a href="https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6" target="_blank" rel="noopener noreferrer">维基百科</a></p></div><h2 id="绝对-url-和相对-url" tabindex="-1"><a class="header-anchor" href="#绝对-url-和相对-url"><span>绝对 URL 和相对 URL</span></a></h2><p>您可能会在网络上遇到两个术语，绝对 URL 和相对 URL(或者称为，绝对链接和相对链接):</p><h3 id="绝对-url" tabindex="-1"><a class="header-anchor" href="#绝对-url"><span>绝对 URL</span></a></h3><p>指向由其在 Web 上的绝对位置定义的位置，包括 protocol(协议) 和 domain name(域名)。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>如果 index.html 页面上传到 projects 这一个目录。并且 projects 目录位于 web 服务站点的根目录，web 站点的域名为 <code>http://www.example.com</code>，那么这个页面就可以通过 <code>http://www.example.com/projects/index.html</code> 访问(或者通过 <code>http://www.example.com/projects/</code> 来访问，因为在没有指定特定的 URL 的情况下，大多数 web 服务会默认访问加载 <code>index.html</code> 这类页面)</p></div><p>不管绝对 URL 在哪里使用，它总是指向确定的相同位置。</p><h3 id="相对-url" tabindex="-1"><a class="header-anchor" href="#相对-url"><span>相对 URL</span></a></h3><p>指向与您链接的文件相关的位置，更像我们在前面一节中所看到的位置。例如，如果我们想从示例文件链接 <code>http://www.example.com/projects/index.html</code> 转到相同目录下的一个 PDF 文件，URL 就是文件名 URL(如: <code>project-brief.pdf</code>)。如果 PDF 文件能够在 projects 的子目录 pdfs 中访问到，相对路径就是 <code>pdfs/project-brief.pdf</code>(对应的绝对 URL 是 <code>http://www.example.com/projects/pdfs/project-brief.pdf</code>)</p><p>一个相对 URL 将指向不同的位置，这取决于它所在的文件所在的位置——例如，如果我们把 index.html 文件从 projects 目录移动到 Web 站点的根目录(最高级别，而不是任何目录中)，里面的 <code>pdfs/project-brief.pdf</code> 相对 URL 将会指向 <code>http://www.example.com/pdfs/project-brief.pdf</code>，而不是 <code>http://www.example.com/projects/pdfs/project-brief.pdf</code></p><p>当然，project-brief.pdf 文件和 pdfs 文件夹的位置不会因为您移动了 <code>index.html</code> 文件而突然发生变化——这将使您的链接指向错误的位置，因此如果单击它，它将无法工作。您得小心点!</p>',17)]))}const p=t(a,[["render",l],["__file","url.html.vue"]]),c=JSON.parse('{"path":"/code/website/definition/url.html","title":"URL","lang":"zh-CN","frontmatter":{"title":"URL","icon":"info","date":"2019-09-02T00:00:00.000Z","category":"HTML","description":"简介 统一资源定位符(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。 统一资源定位符的标准格式如下: 统一资源定位符的完整格式如下: 相关信息 更多详情请见 维基百科 绝对 URL 和相对 U...","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/code/website/definition/url.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"URL"}],["meta",{"property":"og:description","content":"简介 统一资源定位符(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。 统一资源定位符的标准格式如下: 统一资源定位符的完整格式如下: 相关信息 更多详情请见 维基百科 绝对 URL 和相对 U..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"URL\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"绝对 URL 和相对 URL","slug":"绝对-url-和相对-url","link":"#绝对-url-和相对-url","children":[{"level":3,"title":"绝对 URL","slug":"绝对-url","link":"#绝对-url","children":[]},{"level":3,"title":"相对 URL","slug":"相对-url","link":"#相对-url","children":[]}]}],"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"code/website/definition/url.md","localizedDate":"2019年9月2日","excerpt":"","autoDesc":true}');export{p as comp,c as data};