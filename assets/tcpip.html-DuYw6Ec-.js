import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as e,a}from"./app-D0hIwZe2.js";const t="/assets/image-20220619231054174-BwMRRTEy.png",n="/assets/image-20220619231243015-uK085OsS.png",l="/assets/image-20220621012555335-WKkruaA0.png",p="/assets/image-20220621012843230-DWlGkp-A.png",h="/assets/image-20220620213836921-CEM6Pt9J.png",r="/assets/image-20220620224512319-Bz7hSgLR.png",d="/assets/image-20220620232733164-CMDJRlSO.png",c="/assets/image-20220620233410368-CDM0uEJL.png",k="/assets/image-20220620233639263-BvgekyRl.png",o="/assets/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6-%E6%85%A2%E5%90%AF%E5%8A%A8-n3aOGMXq.jpg",g="/assets/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6-%E6%8B%A5%E5%A1%9E%E9%81%BF%E5%85%8D-w7sWQjA9.jpg",u="/assets/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6-%E6%8B%A5%E5%A1%9E%E5%8F%91%E7%94%9F-%E8%B6%85%E6%97%B6%E9%87%8D%E4%BC%A0-8X0TL3st.jpg",m="/assets/%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6-%E5%BF%AB%E9%80%9F%E6%81%A2%E5%A4%8D-BYiZ_V1h.jpg",y={},b=a('<h2 id="协议栈" tabindex="-1"><a class="header-anchor" href="#协议栈"><span>协议栈</span></a></h2><h3 id="理论模型" tabindex="-1"><a class="header-anchor" href="#理论模型"><span>理论模型</span></a></h3><p>osi 七层模型</p><p>tcp/ip 四层模型</p><p>四层模型比较通用，每层都有自己的协议头部</p><h3 id="以太网帧格式-数据链路层" tabindex="-1"><a class="header-anchor" href="#以太网帧格式-数据链路层"><span>以太网帧格式 （数据链路层）</span></a></h3><p>我们常用 ethernet II (罗马数字)，Ethernet 2 格式的以太网帧最大 1518bytes，最小 64bytes。</p><p>ethernet II 帧格式：目的地址 6，源地址 6，协议 2，数据 46-1500，校验和 4。MTU: 1500</p><p>最小 6+6+2+46+4=64bytes，最大 6+6+2+1500+4=1518bytes。</p><p>区分不同帧格式，从 2type 两个自己算出的值来确认</p><p>ethernet II type &gt; 1536</p><p>同样的两个字节在 802.3，802.2 代表 length， 都是 &lt;= 1500。</p><p>ethernet II 的 type 指定了上层协议，如下</p><table><thead><tr><th>0x0800</th><th>ip</th></tr></thead><tbody><tr><td>0x0806</td><td>arp</td></tr><tr><td>0x8137</td><td>ipx</td></tr><tr><td>0x86dd</td><td>ipv6</td></tr><tr><td>0x8035</td><td>rarp</td></tr><tr><td>0x8864</td><td>pppoe</td></tr></tbody></table><h3 id="jumbo-frame-巨型帧" tabindex="-1"><a class="header-anchor" href="#jumbo-frame-巨型帧"><span>jumbo frame（巨型帧）</span></a></h3><p>最多 9000 个字节</p><h3 id="ip-报文格式-网络层" tabindex="-1"><a class="header-anchor" href="#ip-报文格式-网络层"><span>ip 报文格式（网络层）</span></a></h3><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="tcp-报文格式-传输层" tabindex="-1"><a class="header-anchor" href="#tcp-报文格式-传输层"><span>tcp 报文格式（传输层）</span></a></h3><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="tcp-syns-queue-and-accept-queue" tabindex="-1"><a class="header-anchor" href="#tcp-syns-queue-and-accept-queue"><span>tcp syns queue and accept queue</span></a></h3><p>client(syn_send) ---&gt;syn (syn_rcvd)server 放入 syns queue</p><p>client(established) &lt;---sync+ack</p><p>---&gt;ack established 从 syns queue 取出放入 accept queue</p><p>accept 从 accept queue 取出</p><p><code>半连接队列</code>大小由内核参数 /proc/sys/net/ipv4/<code>tcp_max_syn_backlog</code> 决定</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@23 ~]# cat /proc/sys/net/ipv4/tcp_max_syn_backlog</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">128</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux 实现了一种称为 SYNcookie 的机制，通过 net.ipv4.tcp_syncookies 控制，设置为 1 表示开启。<strong>简单说 SYNcookie 就是将连接信息编码在 ISN(initialsequencenumber)中返回给客户端，这时 server 不需要将半连接保存在队列中，而是利用客户端随后发来的 ACK 带回的 ISN 还原连接信息，以完成连接的建立，避免了半连接队列被攻击 SYN 包填满</strong>。</p><p><strong>当这个队列满了，不开启 syncookies 的时候，Server 会丢弃新来的 SYN 包，而 Client 端在多次重发 SYN 包得不到响应而返回（<code>connection time out</code>）错误。但是，当 Server 端开启了 syncookies=1，那么 SYN 半连接队列就没有逻辑上的最大值了，并且/proc/sys/net/ipv4/tcp_max_syn_backlog 设置的值也会被忽略。</strong></p><p><code>全连接队列</code>大小由 min(<code>backlog</code>, <code>somaxconn</code>)</p><p>backlog 其实就是 listen 函数的参数决定，int listen(int sockfd, int <code>backlog</code>)</p><p>somaxconn 则是内核参数 /proc/sys/net/core/<code>somaxconn</code></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@23 ~]# cat /proc/sys/net/core/somaxconn</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">128</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@23 ~]# ss -lnt </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;sport = :443&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">State</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    Recv-Q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    Send-Q</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    Local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Address:Port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    Peer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Address:Port</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">LISTEN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">   0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">         128</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                   *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:443</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>send-q 就是 accept queue</p><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果 accept queue 满了，syns queue 没有满，那么有两种处理方式</p><p>取决于 /proc/sys/net/ipv4/tcp_abort_overflow</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@23 ~]# cat /proc/sys/net/ipv4/tcp_abort_on_overflow</span></span>
<span class="line"><span>0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>次内核参数为 0：第三次握手假定不处理，造成丢失最后一次握手 ack，那么 client 会重新发起 ack</p><p>为 1: 直接发 rst 包给客户端来终止连接，此时客户端会收到 <strong>104 Connection reset by peer</strong> 的错误，一般不会配置这种策略</p><p>rst 包就表示终止连接</p><p>也可以先设置 1 的处理方式，只要客户端出现 104 错误，就证明是全连接队列满的原因导致问题</p><p>也可以通过统计的命令查看 accept queue 的情况：netstat -s |egrep &quot;listen|LISTEN&quot;</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@23 ~]# netstat -s |</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">egrep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;listen|LISTEN&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> SYNs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LISTEN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sockets</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dropped</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ss 命令https://cloud.tencent.com/developer/article/1721800</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -h,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –help</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -V,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 显示版本号</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -t,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –tcp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 显示</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sockets</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -u,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –udp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 显示</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> UDP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议的</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sockets</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -x,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –unix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 显示</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> domain</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sockets，与</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 选项相同</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -n,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –numeric</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 不解析服务的名称，如</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> “22”</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 端口不会显示成</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> “ssh”</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -l,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –listening</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 只显示处于监听状态的端口</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -p,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –processes</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 显示监听端口的进程</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Ubuntu</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 上需要</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -a,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 对</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TCP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 协议来说，既包含监听的端口，也包含建立的连接</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> -r,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> –resolve</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 把</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> IP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 解释为域名，把端口号解释为协议名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ss -ltn 查看 listen 状态的 tcp 服务端口，端口默认为服务名称，n 就是强制显示端口号</p><p>ss -ltr r 就是把地址解释成域名</p><p>ss -ltrp 显示监听端口的进程</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ss -tan state xxx 可以监听状态，其实就是指定某些 tcp 状态，过滤作用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[root@23 ~]# ss -tan state listening &#39;( sport = :443 )&#39;</span></span>
<span class="line"><span>Recv-Q    Send-Q    Local Address:Port    Peer Address:Port</span></span>
<span class="line"><span>0         128                   *:443                *:*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ss -tna 将显示所有 tcp 的状态</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>time-wait 等待 2msl，其实 last-ack 被关的一方也会等待 2msl，也解释了为啥 time-wait 要等待 2msl</p><p>msl 可以配置的，/proc/sys/net/ipv4/tcp_fin_timeout</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@23 ~]# cat /proc/sys/net/ipv4/tcp_fin_timeout</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">60</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2msl=60s，所以 msl 是 30s</p><h3 id="rfc" tabindex="-1"><a class="header-anchor" href="#rfc"><span>RFC</span></a></h3><p>request for comments</p><h3 id="mss-mtu" tabindex="-1"><a class="header-anchor" href="#mss-mtu"><span>MSS，MTU</span></a></h3><p>如果底层物理接口 MTU= 1500 byte，则 MSS = 1500- 20(IP Header) -20 (TCP Header) = 1460 byte，如果 application 有 2000 byte 发送，需要两个 segment 才可以完成发送，第一个 TCP segment = 1460，第二个 TCP segment = 540。实际场景下，TCP 包头会带有 12 字节的时间戳，于是单个 TCP 包实际传输的最大量就会缩减为 1448 字节，1448=1500-20 字节（IP 头）-32 字节（20 字节 TCP 头和 12 字节 TCP 时间戳）</p><h2 id="tcp-协议滑动窗口" tabindex="-1"><a class="header-anchor" href="#tcp-协议滑动窗口"><span>tcp 协议滑动窗口</span></a></h2><h4 id="发送方" tabindex="-1"><a class="header-anchor" href="#发送方"><span>发送方</span></a></h4><p>SND.WND</p><p>SND.UNA</p><p>SND.NXT</p><p>可用窗口= SND.WND-(SND.NXT-SND.UNA)</p><h4 id="接收方" tabindex="-1"><a class="header-anchor" href="#接收方"><span>接收方</span></a></h4><p>rcv.wnd</p><p>rcv.nxt</p><p>操作系统缓冲区和滑动窗口</p><p>接收方，缓冲区有 t1 数据没读那么滑动窗口就有减去 t1</p><p>糊涂窗口综合症</p><h4 id="接收方-1" tabindex="-1"><a class="header-anchor" href="#接收方-1"><span>接收方</span></a></h4><p>窗口小于 min(mss,缓存空间 1/2)，就会发送窗口为 0，等处理一些数据后，使得窗口&gt;=mss，或者缓存空间有一般可用</p><h4 id="发送方-1" tabindex="-1"><a class="header-anchor" href="#发送方-1"><span>发送方</span></a></h4><p>Negle 算法</p><p>原则就是延迟处理</p><p>(窗口&gt;=mss || 数据大小&gt;=mss) || ack</p><h3 id="拥塞控制" tabindex="-1"><a class="header-anchor" href="#拥塞控制"><span>拥塞控制</span></a></h3><p>网络环境差的时候，发送发不能无休止的重发数据包，需有有一定控制，所以有了<code>拥塞控制</code></p><h4 id="拥塞窗口" tabindex="-1"><a class="header-anchor" href="#拥塞窗口"><span>拥塞窗口</span></a></h4><p>为了调节发送方发送数据，就有了拥塞窗口，也就是具体实现拥塞控制的实现，所以发送窗口是综合后的一个窗口</p><p>发送方维护一个拥塞窗口 swnd=min(cwnd,rwnd)，<code>发送窗口</code>为拥塞窗口和接受窗口的最小值</p><p>如何知道当前是否拥塞：没有在规定时间接受方没有 ack</p><p>拥塞控制主要有四个算法，本质就是控制拥塞窗口的值</p><h5 id="慢启动" tabindex="-1"><a class="header-anchor" href="#慢启动"><span>慢启动</span></a></h5><p>原则：发送方没收到一个 ack，拥塞窗口就+1</p><p>每次可以发送原有基础上指数增长，有个上限 ssthresh （slow start threshold），一般 65535 字节</p><p>小于 ssthresh 就是慢启动，大于等于就会使用下一个拥塞避免算法</p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="拥塞避免" tabindex="-1"><a class="header-anchor" href="#拥塞避免"><span>拥塞避免</span></a></h5><p>原则：没收到一个 ack，cwnd 增加 1/cwnd，本质就是从慢启动的指数增长变成线性增长，虽然还是增长，但是速度变缓了</p><p>当 8 个 ack，增加了 1/8*8=1，所以 swnd 是 9，从而变成了线性增长</p><p>如果一直这么增长上去，会慢慢进入拥塞状态，出现丢包，会发生重传？为啥</p><p>当触发了重传，就进入下一个拥塞发生算法了</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="拥塞发生" tabindex="-1"><a class="header-anchor" href="#拥塞发生"><span>拥塞发生</span></a></h5><p>重传有两种：超时重传和快速重传</p><h6 id="超时重传" tabindex="-1"><a class="header-anchor" href="#超时重传"><span>超时重传</span></a></h6><p>当出现丢包时，发送方接受不到 ack 是，ssthresh 设置为 cwnd/2</p><p>cwnd 重设为 1</p><p>并且重新进入慢启动了，这种方式太激进</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h6 id="快速重传" tabindex="-1"><a class="header-anchor" href="#快速重传"><span>快速重传</span></a></h6><p>比超时重传更好的方式，当接受方发现丢了一个中间包，就发送三次前一个包的 ack 给发送方，发送方就会重新快速重传</p><p>此时这种情况不严重，只是小部分数据包收到影响，所以</p><p>cwnd=cwnd/2</p><p>ssthresh=cwnd</p><p>并且进入下一个快速恢复</p><h5 id="快速恢复" tabindex="-1"><a class="header-anchor" href="#快速恢复"><span>快速恢复</span></a></h5><p>一般和拥塞发生的快速重传一起使用</p><p>cwnd=ssthresh+3</p><p>重新传丢失的包</p><p>如果再受到重复的 ack，cwnd+1</p><p>如果收到新数据 ack，那么说明恢复正常了，cwnd 就恢复到拥塞避免的水平</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',124),A=[b];function F(v,f){return i(),e("div",null,A)}const x=s(y,[["render",F],["__file","tcpip.html.vue"]]),_=JSON.parse('{"path":"/tech/linux/tcpip.html","title":"tcpip","lang":"zh-CN","frontmatter":{"title":"tcpip","date":"2023-08-16T04:15:00.000Z","category":"linux","tag":["linux","shell","tcp","ip"],"description":"协议栈 理论模型 osi 七层模型 tcp/ip 四层模型 四层模型比较通用，每层都有自己的协议头部 以太网帧格式 （数据链路层） 我们常用 ethernet II (罗马数字)，Ethernet 2 格式的以太网帧最大 1518bytes，最小 64bytes。 ethernet II 帧格式：目的地址 6，源地址 6，协议 2，数据 46-1500...","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/linux/tcpip.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"tcpip"}],["meta",{"property":"og:description","content":"协议栈 理论模型 osi 七层模型 tcp/ip 四层模型 四层模型比较通用，每层都有自己的协议头部 以太网帧格式 （数据链路层） 我们常用 ethernet II (罗马数字)，Ethernet 2 格式的以太网帧最大 1518bytes，最小 64bytes。 ethernet II 帧格式：目的地址 6，源地址 6，协议 2，数据 46-1500..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-17T04:28:51.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"shell"}],["meta",{"property":"article:tag","content":"tcp"}],["meta",{"property":"article:tag","content":"ip"}],["meta",{"property":"article:published_time","content":"2023-08-16T04:15:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-17T04:28:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tcpip\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-16T04:15:00.000Z\\",\\"dateModified\\":\\"2023-08-17T04:28:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"协议栈","slug":"协议栈","link":"#协议栈","children":[{"level":3,"title":"理论模型","slug":"理论模型","link":"#理论模型","children":[]},{"level":3,"title":"以太网帧格式 （数据链路层）","slug":"以太网帧格式-数据链路层","link":"#以太网帧格式-数据链路层","children":[]},{"level":3,"title":"jumbo frame（巨型帧）","slug":"jumbo-frame-巨型帧","link":"#jumbo-frame-巨型帧","children":[]},{"level":3,"title":"ip 报文格式（网络层）","slug":"ip-报文格式-网络层","link":"#ip-报文格式-网络层","children":[]},{"level":3,"title":"tcp 报文格式（传输层）","slug":"tcp-报文格式-传输层","link":"#tcp-报文格式-传输层","children":[]},{"level":3,"title":"tcp syns queue and accept queue","slug":"tcp-syns-queue-and-accept-queue","link":"#tcp-syns-queue-and-accept-queue","children":[]},{"level":3,"title":"RFC","slug":"rfc","link":"#rfc","children":[]},{"level":3,"title":"MSS，MTU","slug":"mss-mtu","link":"#mss-mtu","children":[]}]},{"level":2,"title":"tcp 协议滑动窗口","slug":"tcp-协议滑动窗口","link":"#tcp-协议滑动窗口","children":[{"level":4,"title":"发送方","slug":"发送方","link":"#发送方","children":[]},{"level":4,"title":"接收方","slug":"接收方","link":"#接收方","children":[]},{"level":4,"title":"接收方","slug":"接收方-1","link":"#接收方-1","children":[]},{"level":4,"title":"发送方","slug":"发送方-1","link":"#发送方-1","children":[]},{"level":3,"title":"拥塞控制","slug":"拥塞控制","link":"#拥塞控制","children":[{"level":4,"title":"拥塞窗口","slug":"拥塞窗口","link":"#拥塞窗口","children":[{"level":5,"title":"慢启动","slug":"慢启动","link":"#慢启动","children":[]},{"level":5,"title":"拥塞避免","slug":"拥塞避免","link":"#拥塞避免","children":[]},{"level":5,"title":"拥塞发生","slug":"拥塞发生","link":"#拥塞发生","children":[{"level":6,"title":"超时重传","slug":"超时重传","link":"#超时重传","children":[]},{"level":6,"title":"快速重传","slug":"快速重传","link":"#快速重传","children":[]}]},{"level":5,"title":"快速恢复","slug":"快速恢复","link":"#快速恢复","children":[]}]}]}]}],"git":{"createdTime":1678545410000,"updatedTime":1692246531000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":2}]},"readingTime":{"minutes":6.52,"words":1957},"filePathRelative":"tech/linux/tcpip.md","localizedDate":"2023年8月16日","excerpt":"","autoDesc":true}');export{x as comp,_ as data};