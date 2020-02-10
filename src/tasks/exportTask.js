const exportQuestions = require('../questions/exportQuestions');
const readFilesUtil = require('../utils/readFilesUtil');
const timesnap = require('timesnap');
const rimraf = require('rimraf');
const videoshow = require('videoshow');

const exportTask = async () => {
    await exportQuestions();

    // TODO: Check of a index file if not, reject the task

    const outputFolder = 'banner_frames';
    const config = global.exportConfig;
    const size = config.size.split('x');

    // Generate frames
    rimraf(outputFolder, () => {});

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
    });


    let images = [];

    // Get the directory
    await readFilesUtil(outputFolder)
    .then(files => {
        console.log(files)
        images = files;
    })
    .catch(e => console.error(e));


    // Process the video
    videoshow(images)
    .save('video.mp4')
    .on('start', function (command) {
        console.log('ffmpeg process started:', command)
    })
    .on('error', function (err) {
        console.error('Error:', err)
    })
    .on('end', function (output) {
        console.log('Video created in:', output)
    })

    return;
}

module.exports = exportTask