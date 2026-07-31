# 11-axc 个人学术主页

主题：低空经济＋空地协同应急救援。

## 上传到 GitHub

1. 登录 GitHub，点击右上角 `+` → `New repository`。
2. Repository name 填写：`11-axc.github.io`。
3. 选择 `Public`，不要勾选自动创建 README，然后点击 `Create repository`。
4. 在新仓库页面点击 `uploading an existing file`。
5. 解压本压缩包，把解压后的所有文件和文件夹拖入上传区。注意 `.github` 文件夹也必须上传。
6. 在页面底部点击 `Commit changes`。
7. 打开仓库的 `Settings` → `Pages`，在 `Build and deployment` 的 `Source` 中选择 `GitHub Actions`。
8. 等待约 1–3 分钟，访问 `https://11-axc.github.io`。

## 修改个人资料

主要内容都在 `src/App.tsx`：

- 搜索“你的姓名”，替换姓名；
- 搜索 `your-email@example.com`，替换邮箱；
- 替换 Google Scholar 和 ORCID 的链接；
- 修改 `publications` 数组即可维护成果列表；
- 修改 `researchAreas` 数组即可维护研究方向。

页面样式位于 `src/style.css`。
