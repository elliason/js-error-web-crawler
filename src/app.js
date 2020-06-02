import fetch from 'isomorphic-fetch';
import processSiteMap from './processSiteMap';
import {inspect} from "util";
import testUrls from './testUrls';

(async()=> {
    const sitemapUrl = 'https://www.vodafone.cz/webs/vodafonecz/seo_data/sitemap-vodafonecz-final.xml';
    // const sitemapUrl = 'http://localhost:5000/test-data.xml';

    fetch(sitemapUrl)
        .then(response => {
            console.log('response', response.status);
            return response.text();
        }).then(str => {
            const links = processSiteMap(str);
            //const devLinks = links.map(link => link.replace('www.vodafone.cz', 'vf-5058-assets-build-refactoring.vodafonecz.devbox.dev.cz'));
            const limitedAmount = links.slice(0, 50);
            return testUrls(limitedAmount);
        }).then(testLog => {
            console.log('test log', inspect(testLog, {
                colors: true,
                depth: 10
            }));
        });
})();
