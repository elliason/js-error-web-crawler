# JS Error's and console.log crawler
Set sitemap.xml file and search url's for javascript errors
Gets all url links from sitemap, process and filter them and then check every url and logs its console errors.

## Start
1) clone repo
2) install dependencies with ```yarn```
3) set source sitemap path inside /src/app.ts
4) possibly set filtered urls (urls we don't want to check) inside /src/filterLinks.ts
5) start searching for errors with ```node src/start.ts```

## Stack
- based on [Puppeteer](https://github.com/puppeteer/puppeteer)
