import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as o,o as l}from"./app-ClpvnUK8.js";const i={};function r(c,e){return l(),a("div",null,e[0]||(e[0]=[o('<p><code>EWMA (Exponentially Weighted Moving-Average)</code> 指数移动加权平均法: 是指各数值的加权系数随时间呈指数递减，越靠近当前时刻的数值加权系数就越大，体现了最近一段时间内的平均值。</p><ul><li><p>公式： $V_t=\\beta*V_{t-1}+(1-\\beta)\\theta_t$</p></li><li><p>变量解释：</p></li><li><ul><li>$V_t$：代表的是第 <code>t</code> 次请求的 <code>EWMA值</code></li><li>$V_{t-1}$：代表的是第 <code>t-1</code> 次请求的 <code>EWMA值</code></li><li>$\\beta$：是一个常量</li><li>$\\theta_t$：是当前实时值</li></ul></li><li><p>$V_t$约等于最近$\\frac{1}{1-\\beta}$范围内的实时值的均值，比如$\\beta=0.9$，那么$V_t$约等于$\\theta_{t-10}$，...，$\\theta_{t}$的平均值</p><ul><li>$\\beta$越大，EWMA 值$V_t$就越接近平均值，极限情况上述就是所有实时值的平均值</li><li>$\\beta$越小，EWMA 值$V_t$就越接近$\\theta_t$，极限情况上述就是$\\theta_t$</li></ul></li></ul><h3 id="ewma-算法的优势" tabindex="-1"><a class="header-anchor" href="#ewma-算法的优势"><span><strong>EWMA 算法的优势</strong></span></a></h3><ol><li>相较于普通的计算平均值算法，<code>EWMA</code> 不需要保存过去所有的数值，计算量显著减少，同时也减小了存储资源。</li><li>传统的计算平均值算法对网络耗时不敏感, 而 <code>EWMA</code> 可以通过请求频繁来调节 <code>β</code>，进而迅速监控到网络毛刺或更多的体现整体平均值。</li></ol><ul><li>当请求较为频繁时, 说明节点网络负载升高了, 我们想监测到此时节点处理请求的耗时(侧面反映了节点的负载情况), 我们就相应的调小<code>β</code>。<code>β</code>越小，<code>EWMA值</code> 就越接近本次耗时，进而迅速监测到网络毛刺;</li><li>当请求较为不频繁时, 我们就相对的调大<code>β值</code>。这样计算出来的 <code>EWMA值</code> 越接近平均值</li></ul>',5)]))}const p=t(i,[["render",r],["__file","ewma.html.vue"]]),h=JSON.parse('{"path":"/tech/algorithms/ewma.html","title":"指数移动加权平均法","lang":"zh-CN","frontmatter":{"title":"指数移动加权平均法","date":"2023-07-04T14:22:00.000Z","category":"algorithm","tag":["ewma","average"],"description":"EWMA (Exponentially Weighted Moving-Average) 指数移动加权平均法: 是指各数值的加权系数随时间呈指数递减，越靠近当前时刻的数值加权系数就越大，体现了最近一段时间内的平均值。 公式： $V_t=\\\\beta*V_{t-1}+(1-\\\\beta)\\\\theta_t$ 变量解释： $V_t$：代表的是第 t 次请求的 E...","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/algorithms/ewma.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"指数移动加权平均法"}],["meta",{"property":"og:description","content":"EWMA (Exponentially Weighted Moving-Average) 指数移动加权平均法: 是指各数值的加权系数随时间呈指数递减，越靠近当前时刻的数值加权系数就越大，体现了最近一段时间内的平均值。 公式： $V_t=\\\\beta*V_{t-1}+(1-\\\\beta)\\\\theta_t$ 变量解释： $V_t$：代表的是第 t 次请求的 E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"ewma"}],["meta",{"property":"article:tag","content":"average"}],["meta",{"property":"article:published_time","content":"2023-07-04T14:22:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指数移动加权平均法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-04T14:22:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":3,"title":"EWMA 算法的优势","slug":"ewma-算法的优势","link":"#ewma-算法的优势","children":[]}],"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"tech/algorithms/ewma.md","localizedDate":"2023年7月4日","excerpt":"","autoDesc":true}');export{p as comp,h as data};