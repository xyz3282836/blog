import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,a as l}from"./app-CUneG6_F.js";const s={},d=l(`<h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤"><span>步骤</span></a></h2><p>1.vscode 安装 clang-format</p><p>2.brew 安装 clang-format</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> clang-format
</code></pre></div><p>3.配置</p><p>proto文件配置</p><p>setting配置（ui配置也行）</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;[proto3]&quot;: {
        &quot;editor.defaultFormatter&quot;: &quot;xaver.clang-format&quot;
    },
&quot;clang-format.fallbackStyle&quot;: &quot;Google&quot;,
&quot;clang-format.language.proto.style&quot;: &quot;{BasedOnStyle: Google,  AlignConsecutiveDeclarations: true,  AlignConsecutiveAssignments: true,  ColumnLimit: 0,  IndentWidth: 4}&quot;

</code></pre></div><p>其他规则参考</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># https://clang.llvm.org/docs/ClangFormatStyleOptions.html
# https://www.bbsmax.com/A/VGzlMjexJb/

# 语言: None, Cpp, Java, JavaScript, ObjC, Proto, TableGen, TextProto
Language: Cpp

BasedOnStyle: LLVM

# 访问说明符(public、private等)的偏移
AccessModifierOffset: -4

# 左括号(左圆括号、左尖括号、左方括号)后的对齐: Align, DontAlign, AlwaysBreak(总是在左括号后换行)
AlignAfterOpenBracket: Align

# 连续赋值时，对齐所有等号
AlignConsecutiveAssignments: true

# 连续声明时，对齐所有声明的变量名
AlignConsecutiveDeclarations: true

# 对齐连续位域字段的风格
# AlignConsecutiveBitFields: AcrossEmptyLinesAndComments

# 对齐连续宏定义的风格
# AlignConsecutiveMacros: Consecutive #clang-format 12

# 用于在使用反斜杠换行中对齐反斜杠的选项
AlignEscapedNewlines: Left

# 水平对齐二元和三元表达式的操作数
AlignOperands: Align

# 对齐连续的尾随的注释
AlignTrailingComments: true

# 如果函数调用或带括号的初始化列表不适合全部在一行时
# 允许将所有参数放到下一行，即使BinPackArguments为false
AllowAllArgumentsOnNextLine: true

# 允许构造函数的初始化参数放在下一行
AllowAllConstructorInitializersOnNextLine: true

# 允许函数声明的所有参数在放在下一行
AllowAllParametersOfDeclarationOnNextLine: true


# 允许短的块放在同一行(Always 总是将短块合并成一行，Empty 只合并空块)
AllowShortBlocksOnASingleLine: Empty

# 允许短的case标签放在同一行
AllowShortCaseLabelsOnASingleLine: true

# 允许短的函数放在同一行: None, InlineOnly(定义在类中), Empty(空函数), Inline(定义在类中，空函数), All
AllowShortFunctionsOnASingleLine: Inline

# 允许短的if语句保持在同一行
AllowShortIfStatementsOnASingleLine: true

# 允许短的循环保持在同一行
AllowShortLoopsOnASingleLine: true

# 总是在定义返回类型后换行(deprecated)
AlwaysBreakAfterDefinitionReturnType: None

# 总是在返回类型后换行: None, All, TopLevel(顶级函数，不包括在类中的函数),
#   AllDefinitions(所有的定义，不包括声明), TopLevelDefinitions(所有的顶级函数的定义)

# 函数声明返回类型后是否换行(None 自动，All全部，TopLevel...)
AlwaysBreakAfterReturnType: None

# 总是在多行string字面量前换行
AlwaysBreakBeforeMultilineStrings: false

# 总是在template声明后换行
AlwaysBreakTemplateDeclarations: false

# false表示函数实参要么都在同一行，要么都各自一行
BinPackArguments: false

# false表示所有形参要么都在同一行，要么都各自一行
BinPackParameters: true

# 大括号换行，只有当 BreakBeforeBraces 设置为Custom时才有效
BraceWrapping:
  # case 语句后面
  AfterCaseLabel: true
  # class定义后面
  AfterClass: true
  # 控制语句后面
  AfterControlStatement: Never
  # enum定义后面
  AfterEnum: true
  # 函数定义后面
  AfterFunction: true
  # 命名空间定义后面
  AfterNamespace: false
  # ObjC定义后面
  AfterObjCDeclaration: false
  # struct定义后面
  AfterStruct: true
  # union定义后面
  AfterUnion: true
  # extern 导出块后面
  AfterExternBlock: false
  # catch之前
  BeforeCatch: true
  # else之前
  BeforeElse: true
  # 缩进大括号(整个大括号框起来的部分都缩进)
  IndentBraces: false
  # 空函数的大括号是否可以在一行
  SplitEmptyFunction: false
  # 空记录体(struct/class/union)的大括号是否可以在一行
  SplitEmptyRecord: false
  # 空名字空间的大括号是否可以在一行
  SplitEmptyNamespace: false

# 在二元运算符前换行: None(在操作符后换行), NonAssignment(在非赋值的操作符前换行), All(在操作符前换行)
BreakBeforeBinaryOperators: None

# 在大括号前换行: Attach(始终将大括号附加到周围的上下文), Linux(除函数、命名空间和类定义，与Attach类似),
#   Mozilla(除枚举、函数、记录定义，与Attach类似), Stroustrup(除函数定义、catch、else，与Attach类似),
#   Allman(总是在大括号前换行), GNU(总是在大括号前换行，并对于控制语句的大括号增加额外的缩进), WebKit(在函数前换行), Custom
#   注：这里认为语句块也属于函数

# 大括号的换行规则
BreakBeforeBraces: Custom

# 三元运算操作符换行位置（?和: 在新行还是尾部）
BreakBeforeTernaryOperators: true

# 在构造函数的初始化列表的逗号前换行
BreakConstructorInitializersBeforeComma: false

# 要使用的构造函数初始化式样式
BreakConstructorInitializers: BeforeComma

# 每行字符的限制，0表示没有限制
ColumnLimit: 100

# 描述具有特殊意义的注释的正则表达式，它不应该被分割为多行或以其它方式改变
# CommentPragmas: &#39;&#39;

# 如果为true，则连续的名称空间声明将在同一行上。如果为false，则在新行上声明每个名称空间。
CompactNamespaces: false

# 构造函数的初始化列表要么都在同一行，要么都各自一行
ConstructorInitializerAllOnOneLineOrOnePerLine: false

# 构造函数的初始化列表的缩进宽度
ConstructorInitializerIndentWidth:  4

# 延续的行的缩进宽度
ContinuationIndentWidth: 4

# 去除C++11的列表初始化的大括号{后和}前的空格
Cpp11BracedListStyle: true

# 继承最常用的指针和引用的对齐方式
DerivePointerAlignment: false

# 关闭格式化
DisableFormat: false

# 自动检测函数的调用和定义是否被格式为每行一个参数(Experimental)
ExperimentalAutoDetectBinPacking: false

# 如果为true，则clang格式会为短名称空间添加缺少的名称空间结尾注释，并修复无效的现有名称结束注释
FixNamespaceComments: true

# 需要被解读为foreach循环而不是函数调用的宏
ForEachMacros:  [ foreach, Q_FOREACH, BOOST_FOREACH ]

# 对#include进行排序，匹配了某正则表达式的#include拥有对应的优先级，匹配不到的则默认优先级为INT_MAX(优先级越小排序越靠前)，
#   可以定义负数优先级从而保证某些#include永远在最前面
IncludeCategories:
  - Regex:  &#39;^&quot;(llvm|llvm-c|clang|clang-c)/&#39;
    Priority:   2
  - Regex:  &#39;^(&lt;|&quot;(gtest|isl|json)/)&#39;
    Priority:   3
  - Regex:  &#39;.*&#39;
    Priority:   1

# 缩进case标签
IndentCaseLabels: false

# 要使用的预处理器指令缩进样式
IndentPPDirectives: AfterHash

# 缩进宽度
IndentWidth: 4

# 函数返回类型换行时，缩进函数声明或函数定义的函数名
IndentWrappedFunctionNames: false

# 保留在块开始处的空行
KeepEmptyLinesAtTheStartOfBlocks: true

# 开始一个块的宏的正则表达式
MacroBlockBegin: &#39;&#39;

# 结束一个块的宏的正则表达式
MacroBlockEnd: &#39;&#39;

# 连续空行的最大数量
MaxEmptyLinesToKeep: 10

# 命名空间的缩进: None, Inner(缩进嵌套的命名空间中的内容), All
# NamespaceIndentation: Inner

# 使用ObjC块时缩进宽度
ObjCBlockIndentWidth: 4

# 在ObjC的@property后添加一个空格
ObjCSpaceAfterProperty: false

# 在ObjC的protocol列表前添加一个空格
ObjCSpaceBeforeProtocolList: true

# 在call(后对函数调用换行的penalty
PenaltyBreakBeforeFirstCallParameter: 2

# 在一个注释中引入换行的penalty
PenaltyBreakComment: 300

# 第一次在&lt;&lt;前换行的penalty
PenaltyBreakFirstLessLess:  120

# 在一个字符串字面量中引入换行的penalty
PenaltyBreakString: 1000

# 对于每个在行字符数限制之外的字符的penalty
PenaltyExcessCharacter: 1000000

# 对每一个空格缩进字符的penalty(相对于前导的非空格列计算)
# PenaltyIndentedWhitespace: 0

# 将函数的返回类型放到它自己的行的penalty
PenaltyReturnTypeOnItsOwnLine: 120

# 指针和引用的对齐: Left, Right, Middle
PointerAlignment: Left

# 允许重新排版注释
ReflowComments: true

# 允许排序#include
SortIncludes: true

# 允许排序 using 声明顺序
SortUsingDeclarations: false

# 在C风格类型转换后添加空格
SpaceAfterCStyleCast: false

# 在逻辑非操作符(!)之后插入一个空格
SpaceAfterLogicalNot: false

# 在 template 关键字后插入一个空格
SpaceAfterTemplateKeyword: false

# 定义在什么情况下在指针限定符之前或之后放置空格
# SpaceAroundPointerQualifiers: Before

# 在赋值运算符之前添加空格
SpaceBeforeAssignmentOperators: true

# 左圆括号之前添加一个空格: Never, ControlStatements, Always
SpaceBeforeParens: ControlStatements

# 空格将在基于范围的for循环冒号之前被删除
SpaceBeforeRangeBasedForLoopColon: true

# [ 前是否添加空格（数组名和[之间，Lambdas不会受到影响）
# 连续多个 [ 只考虑第一个（嵌套数组，多维数组）
SpaceBeforeSquareBrackets: false

# 在空的圆括号中添加空格
SpaceInEmptyParentheses: false

# 在尾随的评论前添加的空格数(只适用于//)
SpacesBeforeTrailingComments: 3

# 在尖括号的&lt;后和&gt;前添加空格
SpacesInAngles: false

# 在容器(ObjC和JavaScript的数组和字典等)字面量中添加空格
SpacesInContainerLiterals:  false

# 在C风格类型转换的括号中添加空格
SpacesInCStyleCastParentheses: false

# 如果为true，将在If/for/switch/while条件括号前后插入空格。
SpacesInConditionalStatement: false

# 在圆括号的(后和)前添加空格
SpacesInParentheses: false

# 在方括号的[后和]前添加空格，lamda表达式和未指明大小的数组的声明不受影响
SpacesInSquareBrackets: false

# 标准: Cpp03, Cpp11, Auto
Standard: Cpp11

# tab宽度
TabWidth: 4

# 使用tab字符: Never, ForIndentation, ForContinuationAndIndentation, Always
UseTab: Never
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[d];function r(v,t){return e(),i("div",null,a)}const m=n(s,[["render",r],["__file","proto-clang-format.html.vue"]]),b=JSON.parse('{"path":"/tech/vscode/plugin/proto-clang-format.html","title":"proto format","lang":"zh-CN","frontmatter":{"title":"proto format","date":"2023-11-06T08:37:00.000Z","category":"格式化","tag":["proto"],"description":"步骤 1.vscode 安装 clang-format 2.brew 安装 clang-format 3.配置 proto文件配置 setting配置（ui配置也行） 其他规则参考","head":[["meta",{"property":"og:url","content":"https://blog.ruizhou.cf/tech/vscode/plugin/proto-clang-format.html"}],["meta",{"property":"og:site_name","content":"rz blog"}],["meta",{"property":"og:title","content":"proto format"}],["meta",{"property":"og:description","content":"步骤 1.vscode 安装 clang-format 2.brew 安装 clang-format 3.配置 proto文件配置 setting配置（ui配置也行） 其他规则参考"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T03:05:52.000Z"}],["meta",{"property":"article:author","content":"ruizhou"}],["meta",{"property":"article:tag","content":"proto"}],["meta",{"property":"article:published_time","content":"2023-11-06T08:37:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-08T03:05:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"proto format\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-06T08:37:00.000Z\\",\\"dateModified\\":\\"2023-12-08T03:05:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ruizhou\\",\\"url\\":\\"https://blog.ruizhou.cf\\"}]}"]]},"headers":[{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[]}],"git":{"createdTime":1702004752000,"updatedTime":1702004752000,"contributors":[{"name":"liuruizhou","email":"liuruizhou@bilibili.com","commits":1}]},"readingTime":{"minutes":6.83,"words":2049},"filePathRelative":"tech/vscode/plugin/proto-clang-format.md","localizedDate":"2023年11月6日","excerpt":"","autoDesc":true}');export{m as comp,b as data};
