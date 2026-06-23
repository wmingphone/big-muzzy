Big Muzzy 每日学习

这是一个纯静态儿童英语学习记录网页，可以直接部署到 GitHub Pages、Netlify、Vercel 或任意静态网站空间。

本地打开：
1. 双击 index.html。
2. 如果浏览器拦截视频或发音，可以换 Chrome / Safari 再试。

功能：
- 每日任务
- 12 集视频学习进度
- 60 个基础单词翻卡练习
- 英文发音
- 星星奖励
- 连续学习天数
- 成就和学习日历

上线方式一：GitHub Pages
1. 在 GitHub 新建仓库，例如 big-muzzy。
2. 上传 index.html、style.css、app.js、README.txt。
3. 进入仓库 Settings -> Pages。
4. Source 选择 Deploy from a branch。
5. Branch 选择 main，Folder 选择 /root。
6. 保存后等待几分钟，GitHub 会生成访问网址。

上线方式二：Netlify
1. 打开 https://www.netlify.com/。
2. 登录后选择 Add new site。
3. 直接拖拽整个 big-muzzy 文件夹上传。
4. Netlify 会自动生成一个可访问网址。

重要说明：
- 学习进度保存在浏览器本地 localStorage 中，不会上传服务器。
- 换设备、换浏览器或清除浏览器数据后，进度可能消失。
- 视频来源使用 archive.org 的在线播放地址，需要联网。
- 单词发音使用浏览器自带的 Speech API。
- 本页面是个人学习记录工具，不是 Big Muzzy 官方产品。
- 公开上线建议仅用于免费学习交流，不要用于收费课程、广告推广或暗示官方授权。
