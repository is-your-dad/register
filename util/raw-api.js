const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "../domains");
const outputDir = path.join(__dirname, "../raw-api");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const internal = require(path.join(__dirname, "internal.json"));
const reserved = require(path.join(__dirname, "reserved.json"));

const v2 = [];

for (const subdomain of internal) {
    v2.push({
        domain: `${subdomain}.is-your.dad`,
        subdomain,
        owner: { username: "is-your-dad" },
        records: { CNAME: "internal.is-your.dad" },
        internal: true
    });
}

for (const subdomain of reserved) {
    v2.push({
        domain: `${subdomain}.is-your.dad`,
        subdomain,
        owner: { username: "is-your-dad" },
        records: { URL: "https://is-your.dad/reserved" },
        reserved: true
    });
}

const files = fs.readdirSync(directoryPath).filter((file) => file.endsWith(".json"));

for (const file of files) {
    const item = JSON.parse(fs.readFileSync(path.join(directoryPath, file), "utf8"));
    const name = path.parse(file).name;

    if (item.owner) delete item.owner.email;

    const itemV2 = {
        domain: `${name}.is-your.dad`,
        subdomain: name,
        owner: item.owner,
        records: item.records
    };

    if (item.redirect_config) itemV2.redirect_config = item.redirect_config;
    if (item.proxied) itemV2.proxied = item.proxied;

    v2.push(itemV2);
}

v2.sort((a, b) => a.subdomain.localeCompare(b.subdomain));
fs.writeFileSync(path.join(outputDir, "v2.json"), JSON.stringify(v2));
