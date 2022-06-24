# html常用元素
* \<html>\</html>
* \<head>\</head>
* \<meta>
* \<link>--外部资源链接元素
  ```
    <link rel="icon" href=# type="img/icon">
    <link rel="stylesheet" href=# type="text/css">
  ```
* \<title>\</title>
* \<body>\</body>
* \<header>\</header>--页眉
* \<nav>\</nav>--导航栏
* \<main>\</main>--文档的 <body>或应用的主体部分。
* \<article>\</article>--文章主体
* \<aside>\</aside>--侧边栏，常嵌套在<main>中
* \<footer>\</footer>--页脚
* \<img>--图像嵌入元素
  ```
  <img src=# alt="描述" width="宽" height="高" title="标题">
    <img srcset="1-320w.jpg 320w,1-480w.jpg 480w,1-800w.jpg 800w"sizes="(max-width: 320px) 280px, (max-widgh:480px) 440px,800px"src="1-800.jpg">自响应式图片
    提供三种规格图片，当最大可视窗口为320px：填充280px；最大可视窗口480px：填充440px；否则填充800px
  ```
* \<svg>\</svg>矢量图
* \<p>\</p>--段落
* \<em>\</em>--斜体
* \<strong>\</strong>--强调
* \<br>--换行
* \<hr>--元素在文档中生成一条水平分割线，表示文本中主题的变化（例如话题或场景的改变）。一般就是一条水平的直线。
* \<sup>\</sup>--上标
* \<sub>\</sub>--下标
* \<abbr>\</abbr>--缩略语
* \<ul>\</ul>--无序列表
  \<ul>\<li>\<li>\<ul>
* \<ol>\</ol>--有序列表
* \<dl>\</dl>--段落列表
  \<dt>\</dt>
  \<dd>\</dd>
* \<input>
* \<address>\</address>
* \<i> 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……
* \<b> 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……
* \<u> 被用来传达传统上用下划线表达的意义：专有名词，拼写错误……
* \<time>\</time>
  ```
  <time datetime="2022-06-13">2022年06月13日</time>
  ```
* \<video>\</video>
  ```
  <video controls width="" height="" autoplay loop muted poster="图片"> 
    <source src="1.mp4" type="video/mp4">
  </video>
  autoplay loop muted--立即播放循环静音，一般不建议；poster--视频前展示图片 
  ```
* \<audio>\</audio>
  ```
   <audio controls><source src="1.mp3" type="audio/mp3"></audio>
  ```
* \<iframe>
  ```
   <iframe src="一段嵌入代码" width="" height=""></iframe>适合将第三方内容嵌入网站
  ```
* \<table>\</table>
    \<td>\</td>单元格
    \<tr>\</tr>行
    \<tr>\<td>\</td>\</tr>
    ```
      <td colspan=""2></td>占两个单元格宽度
      <td rowspan="2"></td>占两个单元格高度
    ```
    <th>\</th> table header标题
    ```
      <colgroup>
        <col>
        <col style="background-color: yellow">
      </colgroup>给列设置样式
    ```
    <caption>\</caption>表格标题
    <thead>\</thead>
    <tbody>\</tbody>
    <tfoot>\</tfoot>
    ```
    <th scope="colgroup"></th> <th scope="col"></th>
    <th scope="rowgroup"></th> <th scope="row"></th>
    ```

