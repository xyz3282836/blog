import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as e,d as i,b as o,o as a,r as n}from"./app-DRGQ8W9R.js";const c={};function p(s,t){const r=n("Mermaid");return a(),l("div",null,[t[0]||(t[0]=e("h2",{id:"squash-merge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#squash-merge"},[e("span",null,"Squash merge")])],-1)),t[1]||(t[1]=e("p",null,[i("通过使用 "),e("code",null,"--squash"),i(" 选项，你可以在合并中将多个 commit 合并为一个。")],-1)),t[2]||(t[2]=e("p",null,"也就是对于以下的例子",-1)),o(r,{id:"mermaid-9",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUAoolFSXmJWcopKUmlpQWpaIqggqC1SVnpCZn55eWKIB0YpplhKIGn2moKqGm5aYWpafCtQEAlZs6wQ=="}),t[3]||(t[3]=e("p",null,[e("code",null,"git merge feature"),i(" 得到的结果为:")],-1)),o(r,{id:"mermaid-13",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUQhVLS00sKS1KRRcGKTXCrhRdODe1KD0VKqDEBQBpQycY"}),t[4]||(t[4]=e("p",null,[i("而如果 "),e("code",null,"feature"),i(" 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 "),e("code",null,"git merge --squash feature"),i(" 得到:")],-1)),o(r,{id:"mermaid-17",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUwhQzQhMrLixNLM5QyE0tSk9VKEotLs0pUeICAGwNGyw="}),t[5]||(t[5]=e("h2",{id:"cherry-pick",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cherry-pick"},[e("span",null,"Cherry pick")])],-1)),t[6]||(t[6]=e("p",null,"有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。",-1)),o(r,{id:"mermaid-24",code:"eJxLzyxxL0osyOBSUEjOz83NLAEykooS85IzFHKLMvILUuESCpkpVkppqYklpUWpjgpGBqpKOKRMMKSSStMV0jIrcGkww22WBVQqIzU5O7+0RCE3MTMPwi8qqtQtyEzOxrAArhSf8w0NsBucm1qUngrTCgDhNlnE"}),t[7]||(t[7]=e("p",null,[i("在这种情况下，我们可以回到 main 分支，执行 "),e("code",null,"git cherry-pick <commit id>"),i(" 来挑拣某个提交，当然，你可以一并在命令中提交挑拣多个 commit。")],-1)),o(r,{id:"mermaid-28",code:"eJx9j0sKhDAMQPdziiDMckBlGAZ3rjxHrbENEltCC3p7BT8brbuEx8sjhkIjytsXgHbMFNahFTVqCyzWeTwBUFdlPaoQBWso83eWQN8LaqOBnqYiZfxSRpky/rthUQ8uBmBF47aLzB9PeriG79mWOO88/Vzk91VGMXioC90zaig="}),t[8]||(t[8]=e("ul",null,[e("li",null,[e("code",null,"git cherry-pick <commit id 1> <commit id 2>"),i(" 表示挑拣 commit id 1 和 commit id 2")]),e("li",null,[e("code",null,"git cherry-pick <commit id 1>...<commit id 2>"),i(" 表示挑拣 commit id 1 与 commit id 2 之间 (包括两者) 的所有提交")]),e("li",null,[e("code",null,"git cherry-pick <branch>"),i(" 表示挑拣该分支最新的提交")])],-1))])}const g=m(c,[["render",p],["__file","merge.html.vue"]]),h=JSON.parse('{"path":"/software/git/merge.html","title":"高级合并","lang":"zh-CN","frontmatter":{"date":"2024-01-27T00:00:00.000Z","title":"高级合并","icon":"merge","order":17,"category":"Git","tag":["Git","软件"],"description":"Squash merge 通过使用 --squash 选项，你可以在合并中将多个 commit 合并为一个。 也就是对于以下的例子 git merge feature 得到的结果为: 而如果 feature 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 git merge --squash featur...","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/software/git/merge.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"高级合并"}],["meta",{"property":"og:description","content":"Squash merge 通过使用 --squash 选项，你可以在合并中将多个 commit 合并为一个。 也就是对于以下的例子 git merge feature 得到的结果为: 而如果 feature 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 git merge --squash featur..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-28T08:14:42.000Z"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"软件"}],["meta",{"property":"article:published_time","content":"2024-01-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-28T08:14:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"高级合并\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-28T08:14:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"Squash merge","slug":"squash-merge","link":"#squash-merge","children":[]},{"level":2,"title":"Cherry pick","slug":"cherry-pick","link":"#cherry-pick","children":[]}],"git":{"createdTime":1677700395000,"updatedTime":1706429682000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":5},{"name":"zhou","email":"liuruizhou@bilibili.com","commits":1},{"name":"zhou","email":"ruizhouliu@163.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"software/git/merge.md","localizedDate":"2024年1月27日","excerpt":"","autoDesc":true}');export{g as comp,h as data};