# 基于 sentry 前端错误监控

#### 简介

前端监控通常来说主要分为：性能监控，数据监控以及**错误监控**

**性能监控**主要用于分析项目的性能相关参数指标，例如：白屏时长，首屏加载速度，重点页面渲染时间，http请求时间等

**数据监控**主要是通过采集用户在项目中的行为数据来进行数据分析用于做项目分析及优化

**错误监控则能够让开发者第一时间发现并修复问题**，单靠用户遇到问题并反馈是不现实的，当用户遇到白屏或者接口错误时，大部分人可能会重试几次、失去耐心然后直接关掉网站

本文档主要介绍前端错误监控

#### 错误监控

 一个错误监控系统应该做到： **监控错误 -> 搜集错误 -> 存储错误 -> 分析错误 -> 错误报警-> 定位错误 -> 解决错误**

 当错误发生的时候我们更需要一些辅助信息来帮我们更快的定位错误，比如 *JS错误类型、 JS错误信息、JS错误堆栈、JS错误发生的位置以及相关位置的代码；JS错误发生的几率、浏览器的类型，版本号，设备机型等等辅助信息*

而具体的实现方案主要就分为自研以及利用已有的一些库或框架进行实现，这里调研的为 **sentry** 

**sentry**

1. 有免费版的付费版，免费版。付费版和免费版其实差不多,免费够我们用了，付费的就是他啥都帮你弄好，你只需要装sdk 就行了
2. sentry 是一个实时事件日志记录和聚合平台。它专门用于监视错误和提取执行适当的事后操作所需的所有信息, 而无需使用标准用户反馈循环的任何麻烦。