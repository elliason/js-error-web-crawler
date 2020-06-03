/**
 * Filter urls we dont want to check
 * @param {string[]} links
 * @return {string[]}
 */
const filterLinks = (links) => {
    const toFilter = [
        'uzitecne-odkazy/slovnik-pojmu',
        '/osobni/volani/roaming',
        '/o-vodafonu/ke-stazeni/osobni-a-firemni/archiv/',
        '/o-vodafonu/o-spolecnosti/pro-media/tiskove-zpravy/',
        '/podminky/podminky-doplnkovych-sluzeb/',
        '/podminky/nabidky-a-akce/',
        '/o-vodafonu/ke-stazeni/osobni-a-firemni/souteze-pravidla-a-podminky/'
    ];

    const filtered = links.filter((link) => {
        let pass = true;
        toFilter.forEach(urlPart=>{
           if (link.indexOf(urlPart) !== -1) {
               pass = false;
           }
        });
        return pass;
    });

    return filtered;
}

export default filterLinks;
