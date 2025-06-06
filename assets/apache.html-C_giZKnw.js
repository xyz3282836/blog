import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as p,f as e,a as l,o}from"./app-BJetEp8E.js";const t={};function i(c,n){return o(),a("div",null,[n[0]||(n[0]=p("p",null,"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。",-1)),e(" more "),n[1]||(n[1]=l(`<h2 id="apache-是什么" tabindex="-1"><a class="header-anchor" href="#apache-是什么"><span>Apache 是什么</span></a></h2><p>Apache HTTP Server (简称 Apache )是 Apache 软件基金会的一个开放源码的网页服务器，可以在大多数计算机操作系统中运行，由于其多平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩展，将 Perl/Python 等解释器编译到服务器中。</p><p>Apache HTTP 服务器是一个模块化的服务器，源于 NCSAhttpd 服务器，经过多次修改，成为世界使用排名第一的 Web 服务器软件。 它可以运行在几乎所有广泛使用的计算机平台上。</p><h2 id="apache-模块" tabindex="-1"><a class="header-anchor" href="#apache-模块"><span>Apache 模块</span></a></h2><p>Apache 通过引入各种模块来完成不同的功能。</p><h2 id="apache-官方文档" tabindex="-1"><a class="header-anchor" href="#apache-官方文档"><span>Apache 官方文档</span></a></h2><ul><li><a href="https://httpd.apache.org/docs/2.4/zh-cn/" target="_blank" rel="noopener noreferrer">文档地址</a></li></ul><h2 id="apache-配置" tabindex="-1"><a class="header-anchor" href="#apache-配置"><span>Apache 配置</span></a></h2><p>Apache 通过 conf 文件夹下的 httpd.conf 来配置。</p><div class="language-apacheconf" data-highlighter="shiki" data-ext="apacheconf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-apacheconf"><span class="line"><span># 此处填入 Apache 的路径</span></span>
<span class="line"><span>Define SRVROOT &quot;U:/Apache&quot;</span></span>
<span class="line"><span>ServerRoot &quot;\${SRVROOT}&quot;</span></span>
<span class="line"><span>Listen 127.0.0.1:80</span></span>
<span class="line"><span>Listen 127.0.0.1:443</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LoadModule auth_basic_module modules/mod_auth_basic.so</span></span>
<span class="line"><span>LoadModule authz_core_module modules/mod_authz_core.so</span></span>
<span class="line"><span>LoadModule deflate_module modules/mod_deflate.so</span></span>
<span class="line"><span>LoadModule dir_module modules/mod_dir.so</span></span>
<span class="line"><span>LoadModule env_module modules/mod_env.so</span></span>
<span class="line"><span>LoadModule isapi_module modules/mod_isapi.so</span></span>
<span class="line"><span>LoadModule log_config_module modules/mod_log_config.so</span></span>
<span class="line"><span>LoadModule mime_module modules/mod_mime.so</span></span>
<span class="line"><span>LoadModule negotiation_module modules/mod_negotiation.so</span></span>
<span class="line"><span>LoadModule proxy_http2_module modules/mod_proxy_http2.so</span></span>
<span class="line"><span>LoadModule ratelimit_module modules/mod_ratelimit.so</span></span>
<span class="line"><span>LoadModule rewrite_module modules/mod_rewrite.so</span></span>
<span class="line"><span>LoadModule setenvif_module modules/mod_setenvif.so</span></span>
<span class="line"><span>LoadModule ssl_module modules/mod_ssl.so</span></span>
<span class="line"><span># 此处填入 PHP 的 ssh 组件路径</span></span>
<span class="line"><span>LoadFile &quot;u:/php/libssh2.dll&quot;</span></span>
<span class="line"><span># 此处填入 PHP 的 Apache 组件路径</span></span>
<span class="line"><span>LoadModule php7_module &quot;u:/PHP/php7apache2_4.dll&quot;</span></span>
<span class="line"><span># 此处填入 PHP 的路径</span></span>
<span class="line"><span>PHPIniDir &quot;u:/PHP&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule unixd_module&gt;</span></span>
<span class="line"><span>User daemon</span></span>
<span class="line"><span>Group daemon</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ServerAdmin mister-hope@outlook.com</span></span>
<span class="line"><span>ServerName localhost</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Directory /&gt;</span></span>
<span class="line"><span>  AllowOverride none</span></span>
<span class="line"><span>  Require all denied</span></span>
<span class="line"><span>&lt;/Directory&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DocumentRoot &quot;\${SRVROOT}/htdocs&quot;</span></span>
<span class="line"><span>&lt;Directory &quot;\${SRVROOT}/htdocs&quot;&gt;</span></span>
<span class="line"><span>  Options FollowSymLinks</span></span>
<span class="line"><span>  AllowOverride All</span></span>
<span class="line"><span>  Require all granted</span></span>
<span class="line"><span>&lt;/Directory&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule dir_module&gt;</span></span>
<span class="line"><span>  DirectoryIndex index.html index.php</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Files &quot;.ht*&quot;&gt;</span></span>
<span class="line"><span>  Require all denied</span></span>
<span class="line"><span>&lt;/Files&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ErrorLog &quot;logs/error.log&quot;</span></span>
<span class="line"><span>LogLevel info</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule log_config_module&gt;</span></span>
<span class="line"><span>  LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{Referer}i\\&quot; \\&quot;%{User-Agent}i\\&quot;&quot; combined</span></span>
<span class="line"><span>  LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b&quot; common</span></span>
<span class="line"><span>  &lt;IfModule logio_module&gt;</span></span>
<span class="line"><span>    LogFormat &quot;%h %l %u %t \\&quot;%r\\&quot; %&gt;s %b \\&quot;%{Referer}i\\&quot; \\&quot;%{User-Agent}i\\&quot; %I %O&quot; combinedio</span></span>
<span class="line"><span>  &lt;/IfModule&gt;</span></span>
<span class="line"><span>  CustomLog &quot;logs/access.log&quot; common</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule alias_module&gt;</span></span>
<span class="line"><span>  ScriptAlias /cgi-bin/ &quot;\${SRVROOT}/cgi-bin/&quot;</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Directory &quot;\${SRVROOT}/cgi-bin&quot;&gt;</span></span>
<span class="line"><span>  AllowOverride None</span></span>
<span class="line"><span>  Options None</span></span>
<span class="line"><span>  Require all granted</span></span>
<span class="line"><span>&lt;/Directory&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule headers_module&gt;</span></span>
<span class="line"><span>  RequestHeader unset Proxy early</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule mime_module&gt;</span></span>
<span class="line"><span>  TypesConfig conf/mime.types</span></span>
<span class="line"><span>  AddHandler application/x-httpd-php .php</span></span>
<span class="line"><span>  AddType application/x-compress .Z</span></span>
<span class="line"><span>  AddType application/x-gzip .gz .tgz</span></span>
<span class="line"><span>  AddType application/x-httpd-php .php .html</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;IfModule proxy_html_module&gt;</span></span>
<span class="line"><span>  Include conf/extra/proxy-html.conf</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span>&lt;IfModule ssl_module&gt;</span></span>
<span class="line"><span>  SSLRandomSeed startup builtin</span></span>
<span class="line"><span>  SSLRandomSeed connect builtin</span></span>
<span class="line"><span>&lt;/IfModule&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span>  ServerAdmin mister-hope@outlook.com</span></span>
<span class="line"><span>  ServerName nenu.com</span></span>
<span class="line"><span>  ServerAlias innenu</span></span>
<span class="line"><span>  DocumentRoot &quot;\${SRVROOT}/htdocs&quot;</span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;VirtualHost *:443&gt;</span></span>
<span class="line"><span>  ServerAdmin mister-hope@outlook.com</span></span>
<span class="line"><span>  ServerName mrhope.com</span></span>
<span class="line"><span>  ServerAlias mrhope</span></span>
<span class="line"><span>  DocumentRoot &quot;\${SRVROOT}/htdocs&quot;</span></span>
<span class="line"><span>&lt;/VirtualHost&gt;</span></span></code></pre></div><ul><li><h3 id="serverroot" tabindex="-1"><a class="header-anchor" href="#serverroot"><span>ServerRoot</span></a></h3><p>指定服务器的根目录</p></li><li><h3 id="listen" tabindex="-1"><a class="header-anchor" href="#listen"><span>Listen</span></a></h3><p>指定服务器监听的 IP 与 port</p></li><li><h3 id="loadmodule" tabindex="-1"><a class="header-anchor" href="#loadmodule"><span>LoadModule</span></a></h3><p>加载指定的模块来使服务器调用</p></li><li><h3 id="phpinidir" tabindex="-1"><a class="header-anchor" href="#phpinidir"><span>PHPIniDir</span></a></h3><p>指定 PHP 目录</p></li><li><h3 id="unixd-module" tabindex="-1"><a class="header-anchor" href="#unixd-module"><span>unixd_module</span></a></h3><p>分配用户权限</p></li><li><h3 id="serveradmin" tabindex="-1"><a class="header-anchor" href="#serveradmin"><span>ServerAdmin</span></a></h3><p>服务器管理员</p></li><li><h3 id="servername" tabindex="-1"><a class="header-anchor" href="#servername"><span>ServerName</span></a></h3><p>服务器名称</p></li></ul>`,11))])}const u=s(t,[["render",i]]),h=JSON.parse('{"path":"/software/apache.html","title":"Apache","lang":"zh-CN","frontmatter":{"title":"Apache","icon":"Apache","date":"2019-12-12T00:00:00.000Z","category":"服务器","description":"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-12T02:34:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"],["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/software/apache.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"Apache"}],["meta",{"property":"og:description","content":"Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-12T02:34:53.000Z"}],["meta",{"property":"article:published_time","content":"2019-12-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-12T02:34:53.000Z"}]]},"git":{"createdTime":1677700395000,"updatedTime":1681266893000,"contributors":[{"name":"liuruizhou","username":"liuruizhou","email":"liuruizhou@bilibili.com","commits":5,"url":"https://github.com/liuruizhou"},{"name":"zhou","username":"zhou","email":"liuruizhou@bilibili.com","commits":1,"url":"https://github.com/zhou"}]},"readingTime":{"minutes":2.28,"words":684},"filePathRelative":"software/apache.md","excerpt":"<p>Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。</p>\\n","autoDesc":true}');export{u as comp,h as data};
