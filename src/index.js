const path = require('path');
const mainQuestions = require('./questions/mainQuestions');
const backupImageTask = require('./tasks/backupImageTask');
const exportTask = require('./tasks/exportTask');
//const puppeteer = require('puppeteer');

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
        default:
            console.log("DEFAULT TASK");
    }

    // Detect files & subfiles

    // Do the task
})();