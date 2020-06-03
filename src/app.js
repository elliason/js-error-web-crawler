import fetch from 'isomorphic-fetch';
import processSiteMap from './processSiteMap';
import {inspect} from "util";
import crawler from './crawler';
import saveLogs from './saveLogs';
import filterLinks from './filterLinks';

(async()=> {
    const sitemapUrl = 'https://www.vodafone.cz/webs/vodafonecz/seo_data/sitemap-vodafonecz-final.xml';
    // const sitemapUrl = 'http://localhost:5000/test-data.xml';

    fetch(sitemapUrl)
        .then(response => {
            return response.text();
        }).then(str => {
            const links = processSiteMap(str);
            const filteredLinks = filterLinks(links);
            const devLinks = filteredLinks.map(link => link.replace('www.vodafone.cz', 'vf-5058-assets-build-refactoring.vodafonecz.devbox.dev.cz'));
            // const limitedAmount = devLinks.slice(0, 100);
            return crawler(devLinks);
        }).then(testLog => {
            console.log('test log', inspect(testLog, {
                colors: true,
                depth: 10
            }));
            saveLogs(testLog);
        });
})();


