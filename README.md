# hexo-summersoda-block
hexo 主题 夏日苏打 插件，用于插入PDF、网页Demo、思维导图、网易云音乐、Bilibili视频等模块功能。

## Usage 使用

### Install 安装

```
$ npm i git+https://github.com/FunctionFun/hexo-summersoda-block.git -S
```

### PDF 文档

#### 参数

```ejs
{% pdf path height %}
```

- `path` pdf 的地址

- `height` pdf展示的高度，可选，默认 300 px，可以自定义其他高度及单位，如 100% 或 20rem 等。

#### 示例

```ejs
<!-- 本地 PDF 文件 -->
{% pdf /files/test.pdf 20rem %}
<!-- or 远程 PDF 文件 -->
{% pdf https://abc.com/test.pdf %}
<!-- or 例如腾讯文档/飞书文档等在线文档分享链接 -->
{% pdf https://docs.qq.com/pdf/DRENMZ3d0bEFMVXRs %}
```

**Tips**: 在线文档使用 `iframe` 标签方式嵌入，理论上可以嵌入任何支持嵌入的网页，并不局限于 PDF 格式。

#### 如何选择在线文档

如果你的在线文档希望在用户未登录的情况下就可以直接看到，并且文档界面简约干净没有多余广告，可以参考以下建议。

经测试：

- 使用腾讯文档嵌入，满足需求 ✔

- 使用飞书文档嵌入，满足需求 ✔

- 幕布似乎禁止了 iframe 方式嵌入 ❌

- 石墨文档嵌入时会弹出一个登录框看起来很不美观 ❌

### Web 链接 / 远程网页 Demo 展示

#### 参数

```ejs
{% web path height %}
```

- `path` 网页的地址

- `height` web 展示的高度，可选，默认 300 px，可以自定义其他高度及单位，如 100% 或 20rem 等。

#### 示例

```ejs
{% web https://abc.com %}
```

这里网页的嵌入方式和 PDF 在线文档的相同，使用 `iframe` 标签，区别于 PDF 只用于文档展示，之后会针对 web 类型做一些专项优化。

### Music 

#### 网易云音乐

#### 参数

```ejs
{% music musicId %}
```

- `musicId` 网易云音乐 歌曲id

#### 示例

```ejs
{% music 1953828422 %}
```

##### 如何获取网易云音乐歌曲id

1. 打开网页版网易云音乐，找到你想展示的歌曲；

2. 点开歌曲详情页；

3. 复制制网址上的`id=`后面的一串数字。

### Video 

#### Bilibili

#### 参数

```ejs
{% video videoId %}
```

- `videoId` Bilibili 视频id

#### 示例

```ejs
<!-- Bilibili 视频id -->
{% video BV1YA4y1R7RJ %}
```

##### 如何获取Bilibili视频id

1. 打开网页版bilibili，找到你想展示的视频；

2. 点开视频详情页；

3. 复制制网址上的`video/`到`?`之间的一串字符。

### 思维导图

高度可以自定义，也可以不写（默认300px）。

使用了依赖库 [markmap](https://github.com/gera2ld/markmap)

#### 参数

```ejs
{% mk height %}
markdown content
{% endmk %}
```

- `height` 思维导图展示的高度，可选，默认 300 px，可以自定义其他高度及单位，如 100% 或 20rem 等。

- `markdown content` 在这里写 Markdown 内容。

#### 示例

```ejs
<!-- 思维导图 -->
{% mk 20rem %}
  - [aticle 1](/about)
    - title 1.1
  - aticle 2
    - title 2.1
    - title 2.2
{% endmk %}
```

## To Do 待办

### 主要功能

- [x] `PDF` 完成于 2022-06-13
- [x] `Web Link / Web Demo` 完成于 2022-06-13
- [x] `思维导图` 完成于 2022-06-13
- [x] `网易云音乐` 完成于 2022-06-13
- [x] `Bilibili` 完成于 2022-06-13
- [ ] `代码框`
- [ ] `链接卡片`

### 样式美化

- [ ] 增加全局模块折叠按钮

- [ ] 思维导图增加回到原始缩放大小按钮

- [ ] 思维导图增加竖向显示模式(可能实现不了，尝试中，MarkMap 文档里没说清楚配置项，得有空看看源码才行，头大。)