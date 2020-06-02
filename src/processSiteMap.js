import xmlJS from 'xml-js';

/**
 * Creates array of url pages to crawl from sitemap text given
 *
 * @param {string} data
 * @return {string[]}
 */
const processSiteMap = (data) => {
    // convert xml to js
    const jsObject = xmlJS.xml2js(data);
    // extract url related elements
    const urlSets = jsObject.elements.filter(element => {
        return element.name === 'urlset';
    });
    // get array of url's
    return urlSets.reduce((carry, current) => {
        if (current.elements.length > 0) {
            carry = carry.concat(getUrls(current.elements))
        }
        return carry;
    }, []);
}

const getUrls = (elements) => elements.reduce((carry, current) => {
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

export default processSiteMap;
