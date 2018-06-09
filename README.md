# WeChat-app-demo

微信小程序 仿PayPal Demo + 零基础教程

> - 下文是零零零基础教程。目前还大脑一片空白的朋友先别打开微信官方的简易教程，一点都不简易。个人认为学习小程序这种web app最快速的方法就是下载现有的demo，改动里面的code看会有什么变化，就能马上知道每行code都在干什么。
> - 有基础的朋友可以略过下文。

<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/1.png"/>
<br><br>

## 1. 在微信开发者工具中打开demo

* 下载本页demo到本地
* 下载微信开发者工具： https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

<img width="100" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/4.png"/>


打开微信开发者工具

* 项目目录：选择demo的存放路径
* AppID: 暂时选择体验小程序（只有在上线的时候需要注册AppID ）
* 项目名称：随意


<img width="350" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/6.png"/>
<br><br>




## 2. 界面介绍

![image3](https://raw.githubusercontent.com/floraazhang/WeChat-app-demo/master/README/3.png)

### 模拟器
左上角选择模拟器，看小程序在不同的手机型号下是什么样子。

<img width="250" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/7.png"/>
<br>

### 编辑器
点亮编辑器时可以看到关于小程序的所有文件。

<img width="200" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/8.png"/>
<img width="300" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/9.png"/>
<br>

### 文件夹分类
文件分类可以根据自己喜好，一般情况下新建的文件会放在pages这个文件夹下，里面每一个子文件夹代表一个页面。例如我们现在看到的主页是在index这个文件夹下，对应这个页面：

<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/10.png"/>

pay这个文件夹对应的是点击主页按钮“汇款”后的页面：
<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/11.png"/>

images这个文件夹里面放了这个小程序用到的一些图片。
<br><br>



## 3. 那就开始写code吧
> 更改code之后点击保存，就能刷新模拟器看效果

### 写过网站的朋友：
小程序和网站很像，写过网站的朋友会非常好上手。小程序里的wxml就相当于网站的html，wxss相当于网站的css。个人感觉它们90%用法都是一样的，在网站里用过的很多functions都适用于小程序。这个时候可以打开微信官方的组件教程：<br>
https://developers.weixin.qq.com/miniprogram/dev/component/

搭配w3schools使用：<br>
https://www.w3schools.com

好了你们可以跳过这一段了。
<br>

### 没写过网站的朋友：
wxml文件里写的是整个页面的内容，要写什么话、放什么图片，从上到下从左到右在wxml写好。wxss文件负责页面的颜值，背景颜色、文字大小、边框......js文件关于逻辑，比如处理点击按钮后的响应。

wxml非常直白，&lt;image&gt;...&lt;/image&gt;意思是这里放一张图片，&lt;text&gt;...&lt;/text&gt;意思是这里写一段文字。如果把它们用&lt;view&gt;...&lt;/view&gt;框起来，意思是张图片和这段文字在同一块区域里：

	<view>
		<image>...</image>
		<text>...</image>
	</view>

那么平行写两个就是垂直排列的两块区域：

	<view>
		<image>...</image>
		<text>...</image>
	</view>
	<view>
		<image>...</image>
		<text>...</image>
	</view>

为什么要把不同区域框起来呢？因为每个区域都可以有自己的属性，比如背景颜色、大小、边距等等。定义属性的方式有两种:<br><br>
**第一种方式：**<br>
在wxml里写class：

	<view class='view1'>
		...
	</view>
	<view class='view2'>
		...
	</view>

然后在wxss里定义view1和view2这两个class：

	.view1{
		background-color: white;
		width: 100%;
		height: 200rpx
	}
	.view2{
		background-color: red;
		width: 100%;
		height: 500rpx
	}

**第二种方式：**<br>
只在wxml里用style表示：

	<view style='background-color: white; width: 100%; height: 200rpx'>
		...
	</view>
	<view style='background-color: red; width: 100%;height: 500rpx‘>
		...
	</view>

<br>
&lt;image&gt;&lt;text&gt;&lt;view&gt;等等都可以添加属性, 大家可以参考demo里用到的写法。同上，微信官方的教程和w3schools都是非常好用的工具：<br>
https://developers.weixin.qq.com/miniprogram/dev/component/<br>
https://www.w3schools.com
<br><br>



## 4. 添加新页面
比如我们想点击一个按钮之后让它跳转到汇款页面，在pages点击右键->新建->目录->输入文件名（比如new）。

<img width="300" src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/13.png"/>

然后点开文件栏下面的app.json这个文件，输入”pages/new/new“，点击保存。这个时候系统会自动生成wxml wxss js 和json文件在你的new文件夹下。

<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/14.png"/>

然后在主页对应的index.wxml文件里写：

	<navigator url="../new/new" class="button">
      <image class="image" src="../images/money-out.png"></image>
    </navigator>

其中&lt;nativator&gt;&lt;/nativator&gt;相当于一个跳转按钮，url是你想跳转到的页面路径，&lt;image&gt;&lt;/image&gt;表示这个按钮要放一个图案，src是按钮图案的路径，储存在images这个文件夹下。
> 路径小科普：<br>
> ../ 表示退一层，此处从index的文件夹下退回到pages文件夹下，然后通过new/到达new文件夹，然后再通过new/到达new的页面。
<br><br>



## 5. 修改小程序名称
在app.json这个文件下修改小程序名称，背景颜色、字体颜色也在这里修改。
<img src="https://github.com/floraazhang/WeChat-app-demo/raw/master/README/15.png"/>
<br><br>



> 零基础教程就是这么多啦，剩下的就靠你们钻研啦～


<br><br><br>



