import puppeteer from 'puppeteer';
import {inspect} from 'util';

/**
 * test urls with puppeteer
 * @param {string[]} urls
 */
const crawler = async (urls) => {
    console.log('urls array', urls);
    const logs = [];

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        logs.push(await testPage(url));
        console.log('page processed', url);
    }

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
        console.log('page on error', err, url);
    });

    page.on('pageerror', (err) => {
        pageLogs.push({
            type: 'pageerror',
            text: err
        });
        console.log('page on pageerror', err, url);
    });

    /*page.on('console', msg => {
        pageLogs.push({
            type: 'console',
            text: msg._text,
            details: {
                location: msg._location
            }
        });
        // console.log('console msg', msg, url);
    });*/

    const pageResponse = await page.goto(url, { waitUntil: 'load' });
    // wait 1m for browser js to execute
    await page.waitFor(1000);
    const random = Math.random().toString(36).substring(7);
    await page.screenshot({path: 'screenshots/'+random+'_screenshot.png'});
    await browser.close();

    return {
        'url': url,
        'response code': pageResponse._status,
        'logs': pageLogs
    };
}

export default crawler;
