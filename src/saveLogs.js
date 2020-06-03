// import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';

const saveLogs = (logs) => {
    const folder = path.resolve(__dirname, '../logs');
    const timeNow = new Date();
    const fileTitle = `log_${timeNow.getFullYear()}-${timeNow.getMonth() + 1}-${timeNow.getDate()}--${timeNow.getHours()}-${timeNow.getMinutes()}-${timeNow.getSeconds()}`;
    const jsonData = JSON.stringify(logs);

    /* rimraf(folder + '/!*', () => {
        console.log('cleaned');
    }) */

    fs.writeFile(folder+'/'+fileTitle+'.json', jsonData, function(err) {
        if (err) {
            console.log('error while writing logs file', err);
        }
    });
};

export default saveLogs;
