<h1 align="center">is-your.dad</h1>

<p align="center"><strong>is-your.dad</strong> is a service that lets developers get a sweet-looking <code>.is-your.dad</code> subdomain for their personal websites.</p>

<p align="center"><a href="./README.zh-CN.md">中文版</a></p>

---

# Register

1. [Fork](https://github.com/is-your-dad/register/fork) the repository.
2. Add a file at `domains/<your-subdomain>.json`. The filename becomes your subdomain:
   ```json
   {
     "owner": {
       "username": "your-github-username"
     },
     "records": {
       "CNAME": "your-target.example.com"
     }
   }
   ```
3. Open a pull request. *Keep an eye on it in case changes are needed.*
   - If changes have been requested, please make them — otherwise **your PR will be closed**.
4. Once your PR is merged, your DNS records will be published within a few minutes.
5. Enjoy your new `.is-your.dad` subdomain!

## Spam Pull Requests

With the rise of invalid PRs, including PRs generated with AI, we reserve the right to:

- Close these PRs without explanation.
- Block or limit the author's ability to interact with this repository.
- Remove any existing domains owned by the author if connected to TOS-violating content.

## Report Abuse

If you find any subdomains being abused or breaking our [Terms of Service](./TERMS_OF_SERVICE.md), please [open an issue](https://github.com/is-your-dad/register/issues/new) with relevant evidence.
