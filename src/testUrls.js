import puppeteer from 'puppeteer';
import {inspect} from 'util';

/**
 * test urls with puppeteer
 * @param {string[]} urls
 */
const testUrls = async (urls) => {
    console.log('testing', urls);
    const logs = [];

    /*return await urls.map(url => {
        return testPage(url);
    });*/

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        logs.push(await testPage(url));
    }

    console.log('testing logs', logs);

    return logs;
}

/**
 * @param {string} url
 */
const testPage = async (url) => {
    const pageLogs = [];
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    page.on('error', (err) => {
        pageLogs.push({
            type: 'error',
            text: err
        });
        console.log('page on error', err);
    });

    page.on('pageerror', (err) => {
        pageLogs.push({
            type: 'pageerror',
            text: err
        });
        console.log('page on pageerror', err);
    });

    page.on('console', msg => {
        for (let i = 0; i < msg.args.length; ++i) {
            pageLogs.push({
                type: 'console',
                text: `${i}: ${msg.args[i]}`
            });
            console.log(`${i}: ${msg.args[i]}`)
        }
    });

    const pageResponse = await page.goto(url);
    await browser.close();

    return {
        'url': url,
        //'response': pageResponse,
        'logs': pageLogs
    };
}

export default testUrls;