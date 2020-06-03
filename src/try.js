import testUrls from "./testUrls";
import {inspect} from "util";

(async()=> {
    testUrls(['http://localhost:5000/testing/testPage']).then(testLog => {
        console.log('test log', inspect(testLog, {
            colors: true,
            depth: 10
        }));
    });
})();
