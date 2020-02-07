const exportQuestions = require('../questions/exportQuestions');
const timesnap = require('timesnap');
const rimraf = require('rimraf')

const exportTask = async () => {
    await exportQuestions();

    // TODO: Check of a index file if not, reject the task

    const outputFolder = 'banner_frames';
    const config = global.exportConfig;
    const size = config.size.split('x');

    /* rimraf(outputFolder, () => {});

    await timesnap({
        url: 'index.html',
        viewport: {
            width: Number(size[0]),
            height: Number(size[1])
        },
        quiet: true,
        screenshotQuality: config.quality,
        //selector: '#container',
        //fps: 30,                    // saves 30 frames for each virtual second
        //duration: 1,               // for 20 virtual seconds 
        outputDirectory: outputFolder
    }).then(() => {
        console.log('Snapshot Finished');
        resolve();
        //return;
    }); */



    return;
}

module.exports = exportTask