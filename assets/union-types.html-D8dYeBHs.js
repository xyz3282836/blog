import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,f as a,b as t,a as n}from"./app-DCNG99d6.js";const l={},h=t("p",null,"联合类型(Union Types)表示取值可以为多种类型中的一种。",-1),r=n(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子"><span>简单的例子</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;seven&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// index.ts(2,1): error TS2322: Type &#39;boolean&#39; is not assignable to type &#39;string | number&#39;.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//   Type &#39;boolean&#39; is not assignable to type &#39;number&#39;.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合类型使用 <code>|</code> 分隔每个类型。</p><p>这里的 <code>let myFavoriteNumber: string | number</code> 的含义是，允许 <code>myFavoriteNumber</code> 的类型是 <code>string</code> 或者 <code>number</code>，但是不能是其他类型。</p><h2 id="访问联合类型的属性或方法" tabindex="-1"><a class="header-anchor" href="#访问联合类型的属性或方法"><span>访问联合类型的属性或方法</span></a></h2><p>当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们<strong>只能访问此联合类型的所有类型里共有的属性或方法</strong>:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getLength</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">something</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，<code>length</code> 不是 <code>string</code> 和 <code>number</code> 的共有属性，所以会报错。</p><p>访问 <code>string</code> 和 <code>number</code> 的共有属性是没问题的:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">something</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> something</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;seven&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">myFavoriteNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 5</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">myFavoriteNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">length</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 编译时报错</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// index.ts(5,30): error TS2339: Property &#39;length&#39; does not exist on type &#39;number&#39;.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，第二行的 <code>myFavoriteNumber</code> 被推断成了 <code>string</code>，访问它的 <code>length</code> 属性不会报错。</p><p>而第四行的 <code>myFavoriteNumber</code> 被推断成了 <code>number</code>，访问它的 <code>length</code> 属性时就报错了。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types" target="_blank" rel="noopener noreferrer">Advanced Types # Union Types</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B" target="_blank" rel="noopener noreferrer">中文版</a>)</li></ul>`,17);function k(p,d){return s(),e("div",null,[h,a(" more "),r])}const g=i(l,[["render",k],["__file","union-types.html.vue"]]),y=JSON.parse('{"path":"/code/language/typescript/basics/union-types.html","title":"联合类型","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"联合类型","icon":"structure","category":"TypeScript","description":"联合类型(Union Types)表示取值可以为多种类型中的一种。","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/code/language/typescript/basics/union-types.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"联合类型"}],["meta",{"property":"og:description","content":"联合类型(Union Types)表示取值可以为多种类型中的一种。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-19T19:40:22.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-19T19:40:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"联合类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-19T19:40:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"简单的例子","slug":"简单的例子","link":"#简单的例子","children":[]},{"level":2,"title":"访问联合类型的属性或方法","slug":"访问联合类型的属性或方法","link":"#访问联合类型的属性或方法","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1705693222000,"updatedTime":1705693222000,"contributors":[{"name":"zhou","email":"ruizhou@163.com","commits":1}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"code/language/typescript/basics/union-types.md","localizedDate":"2020年5月4日","excerpt":"<p>联合类型(Union Types)表示取值可以为多种类型中的一种。</p>\\n","autoDesc":true}');export{g as comp,y as data};