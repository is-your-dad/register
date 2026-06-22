# is-your.dad

> [中文版](./README.zh-CN.md)

Subdomain registry for `is-your.dad`. Open a PR adding a `domains/<name>.json` file and, once merged, GitHub Actions publishes the DNS records to Cloudflare via [DNSControl](https://docs.dnscontrol.org/).

## How to register
1. Fork this repository.
2. Create `domains/<your-subdomain>.json`. The filename becomes your subdomain.
3. File structure:
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
   Supported record types: `A`, `AAAA`, `CAA`, `CNAME`, `DS`, `MX`, `NS`, `SRV`, `TLSA`, `TXT`, `URL`.
4. Open a pull request. CI validates JSON structure, ownership, and record values.
5. DNS goes live within a few minutes of merge.

## Rules
- Filenames must be lowercase, contain no consecutive `--`, and must not match any entry in `util/reserved.json` or `util/internal.json`.
- `owner.username` must equal the PR author's GitHub username (maintainers in `util/trusted.json` excepted).
- `CNAME` cannot be combined with other record types unless `"proxied": true` is set.
- `A` records must be a string array and must not use public DNS resolver IPs.

## Local validation
```sh
npm install
npx ava tests/*.test.js
```

## Required repository secrets
- `CLOUDFLARE_API_TOKEN` — used by `publish.yml` to push DNS records.

## Terms
By registering a subdomain you agree to the [Terms of Service](./TERMS_OF_SERVICE.md).
