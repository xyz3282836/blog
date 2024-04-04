import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-onvditSy.js";const e={},p=t(`<p>是否实现某个接口</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用声明方式</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> User <span class="token operator">=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 类型转换方式</span>
<span class="token keyword">var</span> <span class="token boolean">_</span> User <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>Student<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射"><span>反射</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 参数可以是struct，也可以是ptr</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>demo，可运行</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defer" tabindex="-1"><a class="header-anchor" href="#defer"><span>defer</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>c <span class="token builtin class-name">exec</span> <span class="token builtin class-name">:</span> <span class="token number">0</span>
c defer1: <span class="token number">1</span>
c defer2: <span class="token number">2</span>
c return: <span class="token number">2</span>
</code></pre></div><h2 id="channel" tabindex="-1"><a class="header-anchor" href="#channel"><span>channel</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>v, beforeClosed := &lt;-ch
</code></pre></div><p>beforeClosed 代表 v 是否是信道关闭前发送的。true 代表是信道关闭前发送的，false 代表信道已经关闭。如果一个信道已经关闭，<code>&lt;-ch</code> 将永远不会发生阻塞，但是我们可以通过第二个返回值 beforeClosed 得知信道已经关闭，作出相应的处理。</p><p>channel三种状态喝三种操作后果</p><table><thead><tr><th style="text-align:left;">操作</th><th style="text-align:left;">空值(nil)</th><th style="text-align:left;">非空已关闭</th><th style="text-align:left;">非空未关闭</th></tr></thead><tbody><tr><td style="text-align:left;">关闭</td><td style="text-align:left;">panic</td><td style="text-align:left;">panic</td><td style="text-align:left;">成功关闭</td></tr><tr><td style="text-align:left;">发送数据</td><td style="text-align:left;">永久阻塞</td><td style="text-align:left;">panic</td><td style="text-align:left;">阻塞或成功发送</td></tr><tr><td style="text-align:left;">接收数据</td><td style="text-align:left;">永久阻塞</td><td style="text-align:left;">永不阻塞</td><td style="text-align:left;">阻塞或者成功接收</td></tr></tbody></table><h2 id="死码消除" tabindex="-1"><a class="header-anchor" href="#死码消除"><span>死码消除</span></a></h2><p>死码消除(dead code elimination, DCE)是一种编译器优化技术，用处是在编译阶段去掉对程序运行结果没有任何影响的代码</p><p>死码消除有很多好处：减小程序体积，程序运行过程中避免执行无用的指令，缩短运行时间。</p><p>在声明全局变量时，如果能够确定为常量，尽量使用 const 而非 var，这样很多运算在编译器即可执行。死码消除后，既减小了二进制的体积，又可以提高运行时的效率，如果这部分代码是 <code>hot path</code>，那么对性能的提升会更加明显。</p>`,19),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","base.html.vue"]]),d=JSON.parse('{"path":"/tech/go/base.html","title":"go语言基础","lang":"zh-CN","frontmatter":{"title":"go语言基础","date":"2023-11-15T06:26:00.000Z","category":"go","tag":["interface","base"],"description":"是否实现某个接口 反射 demo，可运行 defer Output: channel beforeClosed 代表 v 是否是信道关闭前发送的。true 代表是信道关闭前发送的，false 代表信道已经关闭。如果一个信道已经关闭，<-ch 将永远不会发生阻塞，但是我们可以通过第二个返回值 beforeClosed 得知信道已经关闭，作出相应的处理。 ...","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/go/base.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"go语言基础"}],["meta",{"property":"og:description","content":"是否实现某个接口 反射 demo，可运行 defer Output: channel beforeClosed 代表 v 是否是信道关闭前发送的。true 代表是信道关闭前发送的，false 代表信道已经关闭。如果一个信道已经关闭，<-ch 将永远不会发生阻塞，但是我们可以通过第二个返回值 beforeClosed 得知信道已经关闭，作出相应的处理。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-04T15:27:22.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"interface"}],["meta",{"property":"article:tag","content":"base"}],["meta",{"property":"article:published_time","content":"2023-11-15T06:26:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-04T15:27:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go语言基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-15T06:26:00.000Z\\",\\"dateModified\\":\\"2024-04-04T15:27:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"反射","slug":"反射","link":"#反射","children":[]},{"level":2,"title":"defer","slug":"defer","link":"#defer","children":[]},{"level":2,"title":"channel","slug":"channel","link":"#channel","children":[]},{"level":2,"title":"死码消除","slug":"死码消除","link":"#死码消除","children":[]}],"git":{"createdTime":1706285779000,"updatedTime":1712244442000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1},{"name":"zhou","email":"ruizhouliu@163.com","commits":1}]},"readingTime":{"minutes":3.69,"words":1108},"filePathRelative":"tech/go/base.md","localizedDate":"2023年11月15日","excerpt":"","autoDesc":true}');export{r as comp,d as data};
