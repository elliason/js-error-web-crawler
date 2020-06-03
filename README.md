# JS Error's and console.log crawler
Set sitemap.xml file and search url's for javascript errors
Gets all url links from sitemap, process and filter them and then check every url and logs its console errors.

## start
1) clone repo
2) install dependencies with ```yarn```
3) set source sitemap path inside /src/app.js
4) possibly set filtered urls (urls we don't want to check) inside /src/filterLinks.js
5) start searching for errors with ```node src/start.js```
