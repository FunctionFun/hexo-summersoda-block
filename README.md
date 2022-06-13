# hexo-summersoda-block
hexo 主题 夏日苏打 插件，用于插入PDF、网页Demo、思维导图、网易云音乐、Bilibili视频等模块功能。

## Usage 使用

### Install 安装

```
$ npm i https://github.com/FunctionFun/hexo-summersoda-block.git -S
```

### PDF 文档

```ejs
<!-- 本地 PDF 文件 -->
{% pdf /files/test.pdf %}
<!-- or 远程 PDF 文件 -->
{% pdf https://abc.com/test.pdf %}
<!-- or 例如腾讯文档/飞书文档等在线文档分享链接 -->
{% pdf https://docs.qq.com/pdf/DRENMZ3d0bEFMVXRs %}
```

#### 如何选择在线文档

如果你的在线文档希望在用户未登录的情况下就可以直接看到，并且文档界面简约干净没有多余广告，可以参考以下建议。

经测试：

- 使用腾讯文档嵌入，满足需求 ✔

- 使用飞书文档嵌入，满足需求 ✔

- 幕布似乎禁止了 iframe 方式嵌入 ❌

- 石墨文档嵌入时会弹出一个登录框看起来很不美观 ❌

### Web 链接 / 远程网页 Demo 展示

```ejs
{% web https://abc.com %}
```

### Music 

#### 网易云音乐

```ejs
<!-- 网易云音乐 歌曲id -->
{% music 1953828422 %}
```

##### 如何获取网易云音乐歌曲id

1. 打开网页版网易云音乐，找到你想展示的歌曲；

2. 点开歌曲详情页；

3. 复制制网址上的`id=`后面的一串数字。

### Video 

#### Bilibili

```ejs
<!-- Bilibili 视频id -->
{% music 1953828422 %}
```

##### 如何获取Bilibili视频id

1. 打开网页版bilibili，找到你想展示的视频；

2. 点开视频详情页；

3. 复制制网址上的`video/`到`?`之间的一串字符。

## To Do 待办

### 主要功能

- [x] PDF
- [x] Web Link / Web Demo
- [ ] 思维导图
- [x] 网易云音乐
- [x] Bilibili
- [ ] 代码框
- [ ] 链接卡片

### 样式美化

- [ ] 增加模块折叠按钮

- [ ] 