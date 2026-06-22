# is-your.dad

> [English](./README.md)

`is-your.dad` 子域名注册仓库。通过 PR 提交一个 `domains/<name>.json` 文件即可获得 `<name>.is-your.dad`,合并后由 GitHub Actions 通过 [DNSControl](https://docs.dnscontrol.org/) 推送到 Cloudflare。

## 提交流程
1. Fork 本仓库。
2. 在 `domains/` 下新建 `<your-subdomain>.json`,文件名即子域名。
3. 文件结构:
   ```json
   {
     "owner": {
       "username": "your-github-username",
       "email": "optional@example.com"
     },
     "records": {
       "CNAME": "your-target.example.com"
     }
   }
   ```
   支持的记录类型: `A`, `AAAA`, `CAA`, `CNAME`, `DS`, `MX`, `NS`, `SRV`, `TLSA`, `TXT`, `URL`。
4. 开 PR。CI 会校验 JSON 结构、所有权、记录合法性等。
5. 合并后几分钟内 DNS 生效。

## 规则要点
- 文件名必须小写、不含连续 `--`、不在 `util/reserved.json` / `util/internal.json` 列表中。
- `owner.username` 必须与 PR 作者的 GitHub 用户名一致(`util/trusted.json` 中的维护者除外)。
- `CNAME` 不能与其他记录共存(除非启用了 `"proxied": true` 的 Cloudflare 代理)。
- `A` 记录必须为字符串数组,不能使用公共 DNS 解析器 IP。

## 本地校验
```sh
npm install
npx ava tests/*.test.js
```

## 部署所需 secrets
- `CLOUDFLARE_API_TOKEN`(用于 `publish.yml` 推送 DNS 记录)

## 服务条款
注册子域名即表示您同意 [服务条款](./TERMS_OF_SERVICE.zh-CN.md)。
