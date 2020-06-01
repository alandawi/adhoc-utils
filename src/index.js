const path = require('path');
const mainQuestions = require('./questions/mainQuestions');
const backupImageTask = require('./tasks/backupImageTask');
const optimizeBuildedBannerTask = require('./tasks/optimizeBuildedBannerTask');
const bannerToVideo = require('./tasks/bannerToVideo');

global.mainTask = null;
global.exportConfig = null;
global.appRoot = path.resolve(__dirname);
global.folderRoot = path.resolve();

(async () => {
    await mainQuestions();

    switch(global.mainTask) {
        case 'export':
            await bannerToVideo();
            break;
        case 'backupImage':
            await backupImageTask();
            break;
        case 'optimizeBuildedBanner':
            await optimizeBuildedBannerTask();
            break;
        case 'extractFrames':
            // TODO: Use ffmpeg to extract frames
            break;
        default:
    }
})();