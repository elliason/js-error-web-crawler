import xmlJS from 'xml-js';
import {inspect} from 'util';

/**
 * Creates array of url pages to crawl from sitemap text given
 *
 * @param {string} data
 * @return {Array}
 */
const processSiteMap = (data) => {
    // console.log(str);
    const jsObject = xmlJS.xml2js(data);
    /*console.log(inspect(jsObject, {
        colors: true,
        depth: 10
    }));*/
    const urlSets = jsObject.elements.filter(element => {
        return element.name === 'urlset';
    }).reduce((carry, current) => {
        console.log('bleee', current);
        if (current.elements.length > 0) {
            carry.concat(getUrls(current.elements));
        }
        return carry;
    }, []);

    console.log(inspect(urlSets, {
        colors: true,
        depth: 10
    }));

    const urls = urlSets.reduce((carry, current) => {
        console.log('bleee', current, current.elements.length);
        if (current.elements.length > 0) {
            console.log('prdel');
            const setUrls = getUrls(current.elements);
            console.log('pica', setUrls);
        }
        return carry;
    }, []);

    console.log(inspect(urls, {
        colors: true,
        depth: 10
    }));

    return urls;
}

const getUrls = (elements) => {
    const urls = elements.reduce((carry, current) => {
        if (current.name !== 'url' || current.elements.length === 0) {
            return;
        }

        const locationElement = current.elements.find(element => {
            return element.name = 'loc';
        });

        if (!locationElement) {
            return;
        }

        const urlElement = locationElement.elements.find(element => {
            return element.type === 'text';
        });

        if (!urlElement) {
            return;
        }

        const url = urlElement.text

        carry.push(url);

        return carry
    }, []);

    return urls;
}

export default processSiteMap;
