# 我的小宇宙 · Star Garden

一个展示生活记录和个人兴趣的静态网页，使用 GitHub Pages 托管。

## 页面地址

发布到现有仓库 `Ichigayaayasarisa/Ichigayaayasarisa.github.io` 的独立 `star-garden/` 目录。

预期地址：https://ichigayaayasarisa.github.io/star-garden/

旧主页根目录文件保持原样，新页面页尾保留旧主页入口。

## 怎么更新

主要修改 `content.js`：

- `intro`：个人介绍。
- `tags`：个人属性与兴趣标签。
- `interests`：兴趣坐标。
- `entries`：生活记录，新记录放在最前面。

每条生活记录格式如下；请用自己的内容替换示例后再保存。

```js
{ date: "2026-10-02", label: "日常", title: "这里写标题", text: "这里写正文。\n这里是下一段。", tags: ["生活"] }
```

首条记录是根据本次建站意图写的开站短句，可自行改写。没有编造旅行经历、MBTI 或其他个人属性。页面暂用“我的小宇宙”作为站名，未假设个人昵称。

在 GitHub 网页中编辑 `star-garden/content.js` 并提交，GitHub Pages 构建完成后会更新页面。

`style.css` 控制外观，`index.html` 控制结构，`script.js` 渲染内容。无需安装前端依赖。资源使用相对路径，适合 GitHub Pages 子目录。

## 背景图片

`assets/starfield.png` 使用内置 imagegen 工具原创生成，未使用第三方动漫图片或音乐。网页使用压缩后的 `assets/starfield.jpg`，方便加载；PNG 原图保留在本地。

提示词：

> Original restrained atmospheric space illustration, landscape 16:9. Deep midnight indigo, fine pinprick stars, wispy blue-violet nebula concentrated on the far right and faint warm pink glow. Left half dark negative space for white headlines. Dreamy gentle light and cinematic analogue grain. No planets, people, silhouettes, mountains, text, UI, logos or watermark.

## 已检查

本地 HTTP 服务、JavaScript 语法、桌面与 390px 窄屏布局、兴趣和日记渲染、页内导航、光点暂停按钮、浏览器错误日志。动画遵循减少动态效果偏好。
