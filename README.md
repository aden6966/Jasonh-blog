# 新怡智健的数字花园

一个极客风格的个人博客，用来记录技术思考与生活随想。

## 设计理念

- 🌿 **慢** - 不追求时效性，只追求深度
- 🌿 **真** - 表达真实的想法，不迎合、不表演
- 🌿 **简** - 极简设计，让内容成为主角
- 🌿 **久** - 静态网页，理论上可以存活很久

## 特性

- ⚡ 纯静态 HTML，极速加载
- 🌓 暗色/亮色主题切换
- 📱 完美响应式，支持移动端
- ✨ 胶片颗粒质感背景
- 🎯 阅读进度条
- 📝 适合长篇随想的版式

## 项目结构

```
blog/
├── index.html          # 首页（最新随想）
├── thoughts.html       # 归档页面
├── about.html          # 关于页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 交互脚本
├── posts/
│   ├── thought-1.html  # 文章1：关于日报的思考
│   ├── thought-2.html  # 文章2：为什么写博客
│   ├── thought-3.html  # 文章3：架构没有银弹（待创建）
│   └── thought-4.html  # 文章4：黑客与画家读后感（待创建）
└── README.md
```

## 如何添加新文章

1. 复制 `posts/thought-1.html` 作为模板
2. 修改文件名（如 `thought-5.html`）
3. 修改内容：标题、日期、心情标签、正文
4. 在 `index.html` 的 "最新随想" 部分添加卡片
5. 在 `thoughts.html` 的归档列表中添加条目

### 文章模板结构

```html
<article>
    <header class="article-header">
        <div class="article-meta">
            <time>2026.03.05</time>
            <span class="article-mood">🌙 深夜有感</span>
            <span>字数</span>
        </div>
        <h1 class="article-title">文章标题</h1>
    </header>

    <div class="article-content">
        <p>正文内容...</p>
        <hr>  <!-- 分隔线 -->
        <h2>小标题</h2>
        <p>更多内容...</p>
        
        <blockquote>引用内容</blockquote>
        
        <pre><code>代码块</code></pre>
    </div>
</article>
```

## 本地预览

```bash
# 进入项目目录
cd blog

# Python 3
python -m http.server 8000

# 或 Node.js
npx serve .

# 访问 http://localhost:8000
```

## 部署到 GitHub Pages

### 方法1：直接上传（最简单）

1. 在 GitHub 创建仓库（如 `blog` 或 `yourusername.github.io`）
2. 进入仓库 → Add file → Upload files
3. 上传所有文件
4. Settings → Pages → Source 选 Deploy from a branch
5. Branch 选 main，文件夹选 / (root)
6. 等待几分钟，访问 `https://你的用户名.github.io/仓库名`

### 方法2：Git 命令行

```bash
# 初始化仓库
cd blog
git init
git add .
git commit -m "Initial commit"

# 连接远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

## 自定义

### 修改个人信息

编辑 `about.html`：
- 修改名字、头像、简介
- 更新联系方式
- 调整关注领域

### 修改配色

编辑 `css/style.css` 中的 CSS 变量：
```css
:root {
    --bg-primary: #0a0a0f;    /* 主背景 */
    --accent: #64d2ff;        /* 强调色 */
    /* ... */
}
```

## 技术栈

- HTML5 (语义化标签)
- CSS3 (自定义属性、Flexbox、Grid)
- Vanilla JavaScript
- Google Fonts (JetBrains Mono + Noto Serif SC)

## License

MIT License - 自由使用，保留署名

---

Built with ❤️ and curiosity.
