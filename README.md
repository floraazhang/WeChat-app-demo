# WeChat-app-demo

微信小程序 仿PayPal Demo + 零基础教程

> - 下文是零零零基础教程
> - 不需要教程的朋友可以直接下载demo

<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/1.png"/>


## 1. 在微信开发者工具中打开demo

* 下载本页demo到本地
* 下载微信开发者工具： https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

<img width="100" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/4.png"/>


打开微信开发者工具

* 项目目录：选择demo的存放路径
* AppID: 暂时选择体验小程序（只有在上线的时候需要注册AppID ）
* 项目名称：随意


<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/6.png"/>


## 2. 界面介绍

![image3](https://raw.githubusercontent.com/floraazhang/WeChat-app-demo/master/README/3.png)

左上角可以选择模拟屏幕，看小程序在不同的手机型号下是什么样子。
<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/7.png"/>

点亮编辑器时可以看到关于小程序的所有文件。
<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/8.png"/>
<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/9.png"/>

### 具体使用

- 将豆瓣的 API 地址更改为以上地址
- 修改微信小程序后台的白名单

## 文字教程

- https://github.com/zce/weapp-demo/tree/tutorial

## 相关演示

- [视频演示如何运行当前项目](http://files.wedn.net/videos/weapp/run-it.mp4)
- [豆瓣电影小程序真机测试](http://files.wedn.net/videos/weapp/weapp.mp4)

很多朋友给我发消息说希望可以真机体验一下，所以前段时间我抽空把这个小程序发布了，大家可以通过微信扫码体验：

![DoubanFilm](https://user-images.githubusercontent.com/6166576/36627844-fc2a74ce-1983-11e8-98b3-25efff7e1d2b.jpg)

源码我放在了：https://github.com/zce/weapp-douban

## 相关项目

- [zce/weapp-douban](https://github.com/zce/weapp-douban) - 不包含开发工作流版本的豆瓣电影
- [zce/weapp-todos](https://github.com/zce/weapp-todos) - 一个简单的任务清单小程序
- [zce/weapp-locally](https://github.com/zce/weapp-locally) - 本地生活，本地吃喝玩乐
- ~~[zce/weapp-boilerplate](https://github.com/zce/weapp-boilerplate) - 一个小程序的快速开发骨架~~

## 有想法？

Welcome PR / Issue / WeChat！

### 交流群

微信群垃圾广告和无意义的分享链接太多，最近狠下心清理了~
改用 QQ 群，单独审核，禁止广告，我的目的很简单，就是留出一个感觉的环境，让志同道合的一起玩，谢谢大家

![IT BETTER群二维码](https://user-images.githubusercontent.com/6166576/39342428-99c27a22-4a0a-11e8-8cc1-fa10f2dafe23.png)

### 我的微信

如果你不喜欢热闹，或者加不进去，可以告诉我（注意我不收红包！有问题直接留言就行，只求描述到我能看懂！我尽快回复）

![我的微信](qrcode1.png)

## 目录

- [预览](#预览)
- [完整特性](#完整特性)
- [操作步骤](#操作步骤)
- [使用说明](#使用说明)
  + [开发阶段](#开发阶段)
  + [生产阶段](#生产阶段)
- [开发计划](#开发计划)
- [分支说明](#分支说明)
- [相关项目](#相关项目)
- [联系方式](#有想法？)
- [许可](#许可)

## 预览

![豆瓣电影演示](https://github.com/zce/weapp-demo/raw/tutorial/preview.gif)

[视频演示](http://files.wedn.net/videos/weapp/preview.mp4)

## 完整特性

- 开发阶段与生产阶段分离。
- 自动化生成新页面所需文件并添加到配置中。
- 以`Standard Code Style`校验全部的`js`和`json`文件。
- 开发阶段`json`配置文件可以有注释，方便备注。
- 代码中集成部分文档内容，减少查文档的时间。
- 开发阶段可以使用`less`完成样式编码，原因你懂得~ （如果你了解这些，当然可以支持`sass`等其他预处理样式）。
- 借助`babel`自动进行`ES2015`特性转换，放心使用新特性。
- 开发阶段用`xml`文件后缀取代`wxml`后缀，避免在开发工具中配置代码高亮。
- Source Map
- Travis CI

## 操作步骤

### for English

[README.en.md](./README.en.md)

### 将项目克隆到本地

用到了`GIT`环境，没有环境的话请自行解决吧。

```shell
# 定位到任意目录
$ cd path/to/root

# 克隆仓库到指定的文件夹
$ git clone https://github.com/zce/weapp-demo.git [project-name] -b master --depth 1

# 进入指定的文件夹
$ cd [project-name]
```

### 安装项目`NPM`依赖

用到了`Node`环境，没有环境的话也请自行解决吧。

```shell
$ npm install
```


## 使用说明

### for English

[README.en.md](./README.en.md)

### 开发阶段

执行如下命令

```shell
# 启动监视
$ npm run watch
```

通过`微信Web开放者工具`打开项目根目录下`dist`文件夹，预览~

- 打开`微信Web开放者工具`，选择`添加项目`，填写或选择相应信息
  + AppID：点击右下角`无AppID`（个人用户可以申请）
  + 项目名称：随便填写，因为不涉及到部署，所以无所谓
  + 项目目录：选择项目根目录下`dist`文件夹
  + 点击`添加项目`
- 可以通过任意开发工具完成`src`下的编码，`gulp`会监视项目根目录下`src`文件夹，当文件变化自动编译
- 注意在微信公众平台后台添加域名白名单设置或者关闭开发阶段对请求域名安全的校验
  + https://api.map.baidu.com
  + https://douban.uieee.com

#### 创建新页面

执行如下命令

```shell
# 启动生成器
$ npm run generate
? Input the page name (index) [page-name]
? Do you need a configuration file (y/N) N
? Select a style framework (Use arrow keys)
> less
# 自动生成...
```

由于微信小程序的每一个页面有特定的结构，新建工作比较繁琐。可以通过此任务减少操作。

### 生产阶段

执行如下命令

```shell
# 启动编译
$ npm run build
```

生产阶段的代码会经过压缩处理，最终输出到`dist`下。

同样可以通过`微信Web开放者工具`测试。

## 开发计划

- [x] 自动化生成新页面所需文件；
- [x] 自动生成新页面时，自动添加配置到`app.json`；
- [x] 加入`ES2015`的`Polyfill`，支持类似`Promise`的新`API`；
- [x] 自动刷新`微信Web开放者工具`中的预览；
- [ ] `HTML` to `WXML` 转换器，让大家可以直接使用`HTML`元素开发；

## 分支说明（WIP）

> for 新手同学

这段时间有很多人反映代码看不懂，没法看下去。

可能有很多刚入门的同学，刚开始学习没有接触太多，而我的这个仓库也旨在服务大众。

为此特地创建多个分支，每个分支的特点和复杂程度各不相同（计划，请持续关注）：

- [x] [level-00](https://github.com/zce/weapp-demo/tree/level-00)

+ 最基本的微信小程序项目结构
+ 一个简单页面的工作

- [x] [level-01](https://github.com/zce/weapp-demo/tree/level-01)

+ 包含`NavigationBar`和`TabBar`的设置
+ 多标签页面切换

- [x] [level-02](https://github.com/zce/weapp-demo/tree/level-02)

+ 划分程序中的各个页面
+ 分别完成各个页面的结构和布局

- [x] [level-03](https://github.com/zce/weapp-demo/tree/level-03)

+ 页面与页面之间的跳转

- [x] [level-04](https://github.com/zce/weapp-demo/tree/level-04)

+ 使用假数据的方式完成数据绑定

- [ ] [level-05](https://github.com/zce/weapp-demo/tree/level-05)

+ 改用`wx.request`接口调用`豆瓣API`完成数据加载
+ 增加加载过程界面体现（loading）

- [ ] [level-06](https://github.com/zce/weapp-demo/tree/level-06)

+ 封装操作`豆瓣API`的模块
+ 二次封装`微信API`为`Promise`的实现

- [ ] [level-07](https://github.com/zce/weapp-demo/tree/level-07)

+ 上拉加载（数据分页）

- [ ] [level-08](https://github.com/zce/weapp-demo/tree/level-08)

+ 其他`微信API`的使用
+ ..

- [x] master

+ 主线版本，包含全部功能和特性！


## 许可

[MIT](./LICENSE) &copy; [汪磊](http://github.com/zce)