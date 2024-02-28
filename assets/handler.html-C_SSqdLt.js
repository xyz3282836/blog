import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-B0-sQQPX.js";const p={},e=t(`<p>handler模式</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> mw

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// handler 定义</span>
<span class="token comment">// Handler responds to an HTTP request.</span>
<span class="token comment">// 结构体 Demo 和 函数HandlerFunc 都实现了</span>
<span class="token keyword">type</span> AppHandler <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Analysis</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> app <span class="token operator">*</span>AppData<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// HandlerFunc http request handler function.</span>
<span class="token keyword">type</span> AppHandlerFunc <span class="token keyword">func</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> app <span class="token operator">*</span>AppData<span class="token punctuation">)</span>

<span class="token comment">// ServeHTTP calls f(ctx).</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>f AppHandlerFunc<span class="token punctuation">)</span> <span class="token function">Analysis</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> app <span class="token operator">*</span>AppData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">f</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> app<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 载体定义</span>
<span class="token keyword">const</span> <span class="token punctuation">(</span>
	_abortIndex <span class="token builtin">int8</span> <span class="token operator">=</span> math<span class="token punctuation">.</span>MaxInt8 <span class="token operator">/</span> <span class="token number">2</span>
<span class="token punctuation">)</span>

<span class="token comment">// AppData</span>
<span class="token keyword">type</span> AppData <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ctx      context<span class="token punctuation">.</span>Context
	index    <span class="token builtin">int8</span>
	handlers <span class="token punctuation">[</span><span class="token punctuation">]</span>AppHandlerFunc
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewAppData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>AppData <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>AppData<span class="token punctuation">{</span>
		index<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>app <span class="token operator">*</span>AppData<span class="token punctuation">)</span> <span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// fmt.Println(len(app.handlers))</span>
	app<span class="token punctuation">.</span>index<span class="token operator">++</span>
	<span class="token keyword">for</span> app<span class="token punctuation">.</span>index <span class="token operator">&lt;</span> <span class="token function">int8</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>handlers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;next-index&quot;</span><span class="token punctuation">,</span> app<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
		app<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>app<span class="token punctuation">.</span>index<span class="token punctuation">]</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> app<span class="token punctuation">)</span>
		app<span class="token punctuation">.</span>index<span class="token operator">++</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>app <span class="token operator">*</span>AppData<span class="token punctuation">)</span> <span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	app<span class="token punctuation">.</span>index <span class="token operator">=</span> _abortIndex
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>app <span class="token operator">*</span>AppData<span class="token punctuation">)</span> <span class="token function">Use</span><span class="token punctuation">(</span>middleware <span class="token operator">...</span>AppHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> m <span class="token operator">:=</span> <span class="token keyword">range</span> middleware <span class="token punctuation">{</span>
		app<span class="token punctuation">.</span>handlers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>handlers<span class="token punctuation">,</span> m<span class="token punctuation">.</span>Analysis<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>app <span class="token operator">*</span>AppData<span class="token punctuation">)</span> <span class="token function">UseFunc</span><span class="token punctuation">(</span>middleware <span class="token operator">...</span>AppHandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	app<span class="token punctuation">.</span>handlers <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>handlers<span class="token punctuation">,</span> middleware<span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>	app <span class="token operator">:=</span> mw<span class="token punctuation">.</span><span class="token function">NewAppData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	a <span class="token operator">:=</span> <span class="token operator">&amp;</span>appsetconf<span class="token punctuation">.</span>AppSetConfHandler<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;conf&quot;</span><span class="token punctuation">}</span>
	b <span class="token operator">:=</span> <span class="token operator">&amp;</span>appsetip<span class="token punctuation">.</span>AppSetIpHandler<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;ip&quot;</span><span class="token punctuation">}</span>

	a1 <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> mw<span class="token punctuation">.</span>AppHandlerFunc <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> app <span class="token operator">*</span>mw<span class="token punctuation">.</span>AppData<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	a2 <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> app <span class="token operator">*</span>mw<span class="token punctuation">.</span>AppData<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> app <span class="token operator">*</span>mw<span class="token punctuation">.</span>AppData<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	app<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token function">a1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	app<span class="token punctuation">.</span><span class="token function">UseFunc</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>Analysis<span class="token punctuation">,</span> <span class="token function">a2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	app<span class="token punctuation">.</span><span class="token function">UseFunc</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Analysis<span class="token punctuation">)</span>

	app<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","handler.html.vue"]]),k=JSON.parse('{"path":"/tech/go/skil/handler.html","title":"go技巧","lang":"zh-CN","frontmatter":{"title":"go技巧","date":"2023-11-15T06:26:00.000Z","category":"go","tag":["skill"],"description":"handler模式 实现 ","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/go/skil/handler.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"go技巧"}],["meta",{"property":"og:description","content":"handler模式 实现 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T03:05:52.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"skill"}],["meta",{"property":"article:published_time","content":"2023-11-15T06:26:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-08T03:05:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go技巧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-15T06:26:00.000Z\\",\\"dateModified\\":\\"2023-12-08T03:05:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[],"git":{"createdTime":1702004752000,"updatedTime":1702004752000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":0.73,"words":220},"filePathRelative":"tech/go/skil/handler.md","localizedDate":"2023年11月15日","excerpt":"","autoDesc":true}');export{d as comp,k as data};
