<h1 align="center">is-your.dad</h1>

<p align="center"><strong>is-your.dad</strong> 是面向开发者的免费子域名服务,给你的个人网站一个漂亮的 <code>.is-your.dad</code> 子域名。</p>

<p align="center"><a href="./README.md">English</a></p>

---

# 注册

1. [Fork](https://github.com/is-your-dad/register/fork) 本仓库。
2. 在 `domains/<你的子域名>.json` 新建文件,文件名就是子域名:
   ```json
   {
     "owner": {
       "username": "你的-github-用户名"
     },
     "records": {
       "CNAME": "your-target.example.com"
     }
   }
   ```
3. 提 Pull Request,**保持关注**以防需要修改。
   - 如果被要求修改,请按要求改,否则 **PR 会被关闭**。
4. PR 合并后几分钟内,DNS 记录就会生效。
5. 享用你的 `.is-your.dad` 子域名!

## Spam PR

针对低质或 AI 生成的 PR,我们保留以下权利:

- 不解释直接关闭。
- 屏蔽或限制作者与本仓库交互的能力。
- 删除该作者已注册的、违反 TOS 的域名。

## 举报滥用

如果发现某些子域名被滥用或违反 [服务条款](./TERMS_OF_SERVICE.zh-CN.md),请[新建 Issue](https://github.com/is-your-dad/register/issues/new) 并附上证据。
