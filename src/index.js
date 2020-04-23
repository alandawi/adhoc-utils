const path = require('path');
const mainQuestions = require('./questions/mainQuestions');
const backupImageTask = require('./tasks/backupImageTask');
const optimizeBuildedBannerTask = require('./tasks/optimizeBuildedBannerTask');
const exportTask = require('./tasks/exportTask');

global.mainTask = null;
global.exportConfig = null;
global.appRoot = path.resolve(__dirname);

(async () => {
    await mainQuestions();

    switch(global.mainTask) {
        case 'exportBanner':
            await exportTask();
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