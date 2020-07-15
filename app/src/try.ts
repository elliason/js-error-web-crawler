import crawler from "./crawler";
import {inspect} from "util";

(async()=> {
    crawler(['http://localhost:5000/testing/testPage', 'http://localhost:5000/testing/testPage-2']).then(testLog => {
        console.log('test log', inspect(testLog, {
            colors: true,
            depth: 10
        }));
    });
})();
