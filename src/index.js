const path = require('path');
const mainQuestions = require('./questions/mainQuestions');
const backupImageTask = require('./tasks/backupImageTask');
const exportTask = require('./tasks/exportTask');

// https://www.npmjs.com/package/cli-progress

// Globals
global.mainTask = null;
global.exportConfig = null;
global.appRoot = path.resolve(__dirname);

(async () => {
    await mainQuestions();

    console.log(global.mainTask);

    switch(global.mainTask) {
        case 'export':
            await exportTask();
            break;
        case 'backupImage':
            await backupImageTask();
            break;
        case 'extractFrames':
            // TODO: Use ffmpeg to extract frames
            break;
        default:
            console.log("DEFAULT TASK");
    }

    console.log("FINISH TOTAL");
})();