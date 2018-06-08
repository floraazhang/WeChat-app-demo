# WeChat-app-demo

微信小程序 仿PayPal Demo + 零基础教程

> - 下文是零零零基础教程。目前还大脑一片空白的朋友先别打开微信官方的简易教程，一点都不简易。个人认为学习小程序这种web app最快速的方法就是下载现有的demo，改动里面的code看会有什么变化，就能马上知道每行code都在干什么。
> - 有基础的朋友可以略过下文。

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

### 模拟器
左上角选择模拟器，看小程序在不同的手机型号下是什么样子。

<img width="250" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/7.png"/>


### 编辑器
点亮编辑器时可以看到关于小程序的所有文件。

<img width="200" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/8.png"/>
<img width="300" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/9.png"/>

### 文件夹分类
文件分类可以根据自己喜好，一般情况下新建的文件会放在pages这个文件夹下，里面每一个子文件夹代表一个页面。例如我们现在看到的主页是在index这个文件夹下，对应这个页面：

<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/10.png"/>

pay这个文件夹对应的是点击主页按钮“汇款”后的页面：
<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/11.png"/>

images这个文件夹里面放了这个小程序用到的一些图片。



## 3.那就开始写code吧
### 写过网站的朋友：
小程序和网站很像，写过网站的朋友会非常好上手。小程序里的wxml就相当于网站的html，wxss相当于网站的css。个人感觉它们90%用法都是一样的，在网站里用过的很多functions都适用于小程序。这个时候可以打开微信官方的组件教程：
https://developers.weixin.qq.com/miniprogram/dev/component/

搭配w3schools使用：
https://www.w3schools.com

好了你们可以跳过这一段了。

### 没写过网站的朋友：
wxml文件里写的是整个页面的内容，要写什么话、放什么图片，从上到下从左到右在wxml写好。wxss文件负责页面的颜值，背景颜色、文字大小、边框......js文件关于逻辑，比如处理点击按钮后的响应。


<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/12.png"/>

如果把整个页面分成一块一块区域，

```
<view>
	表示区域的68
</view>
```

表示整个页面







### 跳转页面
比如我们想点击汇款之后让它跳转到汇款页面，在pages点击右键->新建->目录->输入好记的文件名比如new。然后点开文件栏下面的app.json这个文件，输入“"pages/new/new"”

<img width="300" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/11.png"/>
<img width="300" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/12.png"/>





（未完待续）




