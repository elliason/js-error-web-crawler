import puppeteer from 'puppeteer';
import fetch from 'isomorphic-fetch';
import processSiteMap from './processSiteMap.babel';
import path from 'path';

(async()=> {
    // const sitemapUrl = 'https://www.vodafone.cz/webs/vodafonecz/seo_data/sitemap-vodafonecz-final.xml';
    const sitemapUrl = 'http://localhost:5000/test-data.xml';
    //console.log('url', __dirname, sitemapUrl);

    fetch(sitemapUrl)
        .then(response => {
            // console.log('rr', response);
            return response.text();
        }).then(str => {
            const links = processSiteMap(str);
    })

    // const browser = await puppeteer.launch();
})();
