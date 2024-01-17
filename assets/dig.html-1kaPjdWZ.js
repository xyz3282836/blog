import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as e,c as p,b as n,e as c,d as l,a as i}from"./app-LbYZiKFF.js";const o="/assets/Screenshot-2016-07-20-12.31.00-1ndW1zcR.png",r={},u=i(`<p>Using dig +trace to Understand DNS Resolution from Start to Finish</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>➜  ~ <span class="token function">dig</span> www.ruizhou.xyz

<span class="token punctuation">;</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> DiG <span class="token number">9.10</span>.6 <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> www.ruizhou.cf
<span class="token punctuation">;</span><span class="token punctuation">;</span> global options: +cmd
<span class="token punctuation">;</span><span class="token punctuation">;</span> Got answer:
<span class="token punctuation">;</span><span class="token punctuation">;</span> -<span class="token operator">&gt;&gt;</span>HEADER<span class="token operator">&lt;&lt;-</span> opcode: QUERY, status: NOERROR, id: <span class="token number">12288</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> flags: qr rd ra<span class="token punctuation">;</span> QUERY: <span class="token number">1</span>, ANSWER: <span class="token number">2</span>, AUTHORITY: <span class="token number">0</span>, ADDITIONAL: <span class="token number">1</span>

<span class="token punctuation">;</span><span class="token punctuation">;</span> OPT PSEUDOSECTION:
<span class="token punctuation">;</span> EDNS: version: <span class="token number">0</span>, flags:<span class="token punctuation">;</span> udp: <span class="token number">4096</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> QUESTION SECTION:
<span class="token punctuation">;</span>www.ruizhou.cf.			IN	A

<span class="token punctuation">;</span><span class="token punctuation">;</span> ANSWER SECTION:
www.ruizhou.cf.		<span class="token number">33</span>	IN	A	<span class="token number">104.21</span>.92.218
www.ruizhou.cf.		<span class="token number">33</span>	IN	A	<span class="token number">172.67</span>.198.221

<span class="token punctuation">;</span><span class="token punctuation">;</span> Query time: <span class="token number">0</span> msec
<span class="token punctuation">;</span><span class="token punctuation">;</span> SERVER: <span class="token number">10.23</span>.193.249<span class="token comment">#53(10.23.193.249)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> WHEN: Mon Jul <span class="token number">24</span> <span class="token number">13</span>:24:22 CST <span class="token number">2023</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> MSG SIZE  rcvd: <span class="token number">75</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看flags标志位， 如果说flags有标志位是<strong>aa (authority answer)</strong>， 说明是权威dns返回的最新解析出来的无缓存ip地址 （类似于查询db返回了最新的）</p><figure><img src="`+o+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// step1
➜  ~ <span class="token function">dig</span> +trace www.ruizhou.cf
// step2
<span class="token punctuation">;</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> DiG <span class="token number">9.10</span>.6 <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> +trace www.ruizhou.cf
<span class="token punctuation">;</span><span class="token punctuation">;</span> global options: +cmd
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	k.root-servers.net.// <span class="token number">13</span>个根服务器
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	b.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	f.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	i.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	e.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	a.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	m.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	j.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	d.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	c.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	h.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	g.root-servers.net.
<span class="token builtin class-name">.</span>			<span class="token number">73</span>	IN	NS	l.root-servers.net.
<span class="token punctuation">;</span><span class="token punctuation">;</span> Received <span class="token number">239</span> bytes from <span class="token number">10.23</span>.193.249<span class="token comment">#53(10.23.193.249) in 8 ms</span>
// step3
cf.			<span class="token number">172800</span>	IN	NS	a.ns.cf.
cf.			<span class="token number">172800</span>	IN	NS	b.ns.cf.
cf.			<span class="token number">172800</span>	IN	NS	c.ns.cf.
cf.			<span class="token number">172800</span>	IN	NS	d.ns.cf.
cf.			<span class="token number">86400</span>	IN	NSEC	cfa. NS RRSIG NSEC
cf.			<span class="token number">86400</span>	IN	RRSIG	NSEC <span class="token number">8</span> <span class="token number">1</span> <span class="token number">86400</span> <span class="token number">20230805170000</span> <span class="token number">20230723160000</span> <span class="token number">11019</span> <span class="token builtin class-name">.</span> Uychi9UlDouSm6blHZlRUAeMVzad/673OTnln96SVUwRRTaKNcUl+sU7 KAPnupkvdVYjlTHZBU0/7cDhPUpU4mXzOnr10Jhzsp/GVphVGiFZi6JI y1JYVfFlnuecPcLrw5ymAF7MDFmUNTKXYm8AcwQyZncq2lO3I4O900tJ xydD1KHKKReg1EUf9aZ48tLFzAGv0o3LVZOLsRU8+alKpIdREDKGeqpv Cs1YdK4BmLt3MTsEbNWxMPR49ZYSgMir9Sk5D29+5O47AtibREvdarz4 ItD49puEVE2VODgVhPHlY71c8JDH7U3W23+G7owll1lkabDl0PNB9EK5 <span class="token assign-left variable">Lu11Ig</span><span class="token operator">==</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> Received <span class="token number">598</span> bytes from <span class="token number">199.9</span>.14.201<span class="token comment">#53(b.root-servers.net) in 238 ms</span>
// step4
ruizhou.cf.		<span class="token number">300</span>	IN	NS	bob.ns.cloudflare.com.// cf的权威dns
ruizhou.cf.		<span class="token number">300</span>	IN	NS	paislee.ns.cloudflare.com.// cf的权威dns
<span class="token punctuation">;</span><span class="token punctuation">;</span> Received <span class="token number">100</span> bytes from <span class="token number">185.21</span>.171.17<span class="token comment">#53(d.ns.cf) in 58 ms</span>
// step5
www.ruizhou.cf.		<span class="token number">300</span>	IN	A	<span class="token number">104.21</span>.92.218// cf权威dns解析的A记录，由于这个域名开了cf的cdn代理，所以不是源站的ip，而是cf的cdn的ip
www.ruizhou.cf.		<span class="token number">300</span>	IN	A	<span class="token number">172.67</span>.198.221
<span class="token punctuation">;</span><span class="token punctuation">;</span> Received <span class="token number">75</span> bytes from <span class="token number">108.162</span>.194.183<span class="token comment">#53(paislee.ns.cloudflare.com) in 28 ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,6),d={href:"https://ns1.com/blog/using-dig-trace",target:"_blank",rel:"noopener noreferrer"};function m(b,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",d,[c("https://ns1.com/blog/using-dig-trace"),l(s)])])])}const f=a(r,[["render",m],["__file","dig.html.vue"]]);export{f as default};
