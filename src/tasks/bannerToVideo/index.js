const exportQuestions = require('../../questions/exportQuestions');
const puppeteer = require('puppeteer');
const { record } = require('./record');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

const exportTask = async () => {
    await exportQuestions();

    const config = global.exportConfig;
    const size = config.size.split('x');

    await puppeteer.launch({headless : true}).then(async browser => {
        const page = await browser.newPage();

        await page.setViewport({ width: Number(size[0]), height: Number(size[1])} );
    
        await page.goto(`file://${process.cwd()}/index.html`, {waitUntil : 'networkidle2'});
    
        await record({
            ffmpeg: ffmpegPath,
            browser: browser,
            page: page,
            output: 'OUTPUT.webm',
            fps: 5,
            frames: 120,
            prepare: function (browser, page) {
                console.log("Generating video, please wait...");
            },
            render: function (browser, page, frame) {}
        });

        // TODO: Dispath event
    
        await browser.close();
    });

    console.log("Finished");
    return;    
}

module.exports = exportTask