import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-qZXhpeuI.js";const p={},e=t(`<p>是否实现某个接口</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用声明方式</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> User <span class="token operator">=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 类型转换方式</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> User <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>Student<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 参数可以是struct，也可以是ptr</span>
<span class="token comment">// type 是Type类型</span>
<span class="token keyword">type</span> <span class="token operator">=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span>
value <span class="token operator">=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span>
<span class="token comment">// value Type() 可以得到上面TypeOf的type</span>
<span class="token keyword">type</span> <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">Type</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// type,value都可以Kind(),而且相等，kind 从0-26</span>
kind <span class="token operator">=</span> <span class="token keyword">type</span><span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">==</span>value<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// reflect.TypeOf((*&lt;interface&gt;)(nil)).Elem()获得接口类型。因为People是个接口不能创建实例，所以把nil强制转为*common.People类型（common.People是定义的一个interface）</span>
typeOfPeople <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>common<span class="token punctuation">.</span>People<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 正常</span>
structType<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// ！！！ panic,指针type无法获取，需要先转化成structType，通过Elem()</span>
ptrType<span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 正常</span>
ptrType<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NumField</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 获取index的field</span>
field <span class="token operator">=</span> structType<span class="token punctuation">.</span><span class="token function">Field</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>

<span class="token comment">// 只包含值的方法</span>
structType<span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 值的方法+指针的方法</span>
ptrType<span class="token punctuation">.</span><span class="token function">NumMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 相互转化</span>
<span class="token comment">// 一般使用value的Elem()</span>
<span class="token comment">// value 指针转值</span>
structValue <span class="token operator">=</span> ptrValue<span class="token punctuation">.</span><span class="token function">Elem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// value 值转指针, ptrValue.Elem().Addr() 是可以的</span>
ptrValue <span class="token operator">=</span> structValue<span class="token punctuation">.</span><span class="token function">Addr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// ！！！panic，直接refluct.ValueOf()获取的structValue调用Addr()会panic，可以通过CanAddr()判断</span>
ptrValue <span class="token operator">=</span> refluct<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>user<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Addr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// value Interface(),一般转化成目标结构</span>
user <span class="token operator">=</span> userValue<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span>common<span class="token punctuation">.</span>User<span class="token punctuation">)</span>

<span class="token comment">// new TypeOf struct type</span>
<span class="token comment">// TypeOf 参数不能是指针</span>
value <span class="token operator">=</span> reflect<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>reflect<span class="token punctuation">.</span><span class="token function">TypeOf</span><span class="token punctuation">(</span>common<span class="token punctuation">.</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// demo</span>
buser <span class="token operator">:=</span> common<span class="token punctuation">.</span>User<span class="token punctuation">{</span>Age<span class="token punctuation">:</span> <span class="token number">22</span><span class="token punctuation">,</span> Nick<span class="token punctuation">:</span> <span class="token string">&quot;bb&quot;</span><span class="token punctuation">}</span>
<span class="token operator">*</span>value<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>common<span class="token punctuation">.</span>User<span class="token punctuation">)</span> <span class="token operator">=</span> buser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo，可运行</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;reflect&quot;</span>
	<span class="token string">&quot;unsafe&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Myi <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">ParamEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
	<span class="token function">NoEmpty</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span>
	<span class="token function">ReturnEmpty</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MyimWarp <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	myim Myim
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Myim <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Age <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Myim<span class="token punctuation">)</span> <span class="token function">ParamEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> m<span class="token punctuation">.</span>Age
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Myim<span class="token punctuation">)</span> <span class="token function">NoEmpty</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	m<span class="token punctuation">.</span>Age <span class="token operator">+=</span> <span class="token operator">+</span>i
	<span class="token keyword">return</span> m<span class="token punctuation">.</span>Age
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m <span class="token operator">*</span>Myim<span class="token punctuation">)</span> <span class="token function">ReturnEmpty</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	m<span class="token punctuation">.</span>Age <span class="token operator">+=</span> <span class="token operator">+</span>i
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	one <span class="token operator">:=</span> Myim<span class="token punctuation">{</span>Age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
	<span class="token function">deal</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> one<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">deal</span><span class="token punctuation">(</span>im <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//todo call</span>
	<span class="token comment">// type</span>
	vv <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>im<span class="token punctuation">)</span>
	<span class="token keyword">switch</span> vv<span class="token punctuation">.</span><span class="token function">Kind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Pointer<span class="token punctuation">:</span>
		v <span class="token operator">:=</span> vv
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ptr&quot;</span><span class="token punctuation">)</span>
		myiOne<span class="token punctuation">,</span> ok <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>Myim<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;assert fail&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 反射调用和下面正常调用无区别</span>
		<span class="token boolean">_</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;ReturnEmpty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		ret <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;ParamEmpty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		ret0<span class="token punctuation">,</span> ok <span class="token operator">:=</span> ret<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ret0<span class="token punctuation">,</span> ok<span class="token punctuation">)</span>

		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#+v \\n&quot;</span><span class="token punctuation">,</span> myiOne<span class="token punctuation">)</span>
		myiOne<span class="token punctuation">.</span><span class="token function">ReturnEmpty</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myiOne<span class="token punctuation">.</span><span class="token function">ParamEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">case</span> reflect<span class="token punctuation">.</span>Struct<span class="token punctuation">:</span>
		<span class="token comment">// 先转成指针</span>

		<span class="token comment">// 方式1</span>
		<span class="token comment">// new的方式，重新构造一个struct</span>
		<span class="token comment">// imm := im.(Myim)</span>
		<span class="token comment">// v := reflect.New(reflect.TypeOf((*Myim)(nil)).Elem())</span>
		<span class="token comment">// *v.Interface().(*Myim) = imm</span>

		<span class="token comment">// 方式2</span>
		<span class="token comment">// 和上面一样的思路，vv是 struc value</span>
		<span class="token comment">// new vv.Type，再Elem()设置vv</span>
		<span class="token comment">//v := reflect.New(vv.Type())</span>
		<span class="token comment">//v.Elem().Set(vv)</span>

		<span class="token comment">// 方式3</span>
		<span class="token comment">// 通过im interface 接参数后，&amp;im 并不能获取地址</span>
		<span class="token comment">// var imm interface{} = &amp;Myim{Age: 18}</span>
		<span class="token comment">// v := reflect.ValueOf(imm)</span>

		<span class="token comment">// 方式4</span>
		<span class="token comment">// 指针转化</span>
		newPtr <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>Myim<span class="token punctuation">)</span><span class="token punctuation">(</span>unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>im<span class="token punctuation">)</span><span class="token punctuation">)</span>
		v <span class="token operator">:=</span> reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span>newPtr<span class="token punctuation">)</span>

		<span class="token comment">// 错误方式，用imm interface 接非指针，&amp;imm 并不是 &amp;Myim{}</span>
		<span class="token comment">//var imm interface{} = Myim{Age: 18}</span>
		<span class="token comment">//v := reflect.ValueOf(&amp;imm)</span>
		<span class="token comment">// 或者 one := Myim{Age: 18}</span>
		<span class="token comment">// vvv := interface{}(one)</span>
		<span class="token comment">//v := reflect.ValueOf(&amp;im)</span>

		myiOne<span class="token punctuation">,</span> ok <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span>Myi<span class="token punctuation">)</span>
		<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;assert fail...&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;assert ok...&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
		<span class="token comment">// 反射调用和下面正常调用无区别</span>
		<span class="token boolean">_</span> <span class="token operator">=</span> v<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;ReturnEmpty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span>reflect<span class="token punctuation">.</span><span class="token function">ValueOf</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		ret <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">MethodByName</span><span class="token punctuation">(</span><span class="token string">&quot;ParamEmpty&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>reflect<span class="token punctuation">.</span>Value<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
		ret0<span class="token punctuation">,</span> ok <span class="token operator">:=</span> ret<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">Interface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ret0<span class="token punctuation">,</span> ok<span class="token punctuation">)</span>

		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#+v \\n&quot;</span><span class="token punctuation">,</span> myiOne<span class="token punctuation">)</span>
		myiOne<span class="token punctuation">.</span><span class="token function">ReturnEmpty</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myiOne<span class="token punctuation">.</span><span class="token function">ParamEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defer" tabindex="-1"><a class="header-anchor" href="#defer" aria-hidden="true">#</a> defer</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c return:&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 打印结果为 c return: 2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> i <span class="token builtin">int</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c defer2:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token comment">// 打印结果为 c defer: 2</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c defer1:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token comment">// 打印结果为 c defer: 1</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c exec :&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>i
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>c <span class="token builtin class-name">exec</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
c defer1: <span class="token number">1</span>
c defer2: <span class="token number">2</span>
c return: <span class="token number">2</span>
</code></pre></div>`,10),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","base.html.vue"]]);export{r as default};
