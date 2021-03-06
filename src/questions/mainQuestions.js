const prompts = require('prompts');

const mainQuestions = async () => {
    const questions = [
        {
            type: 'select',
            name: 'task',
            message: 'Beautiful day to perform tasks! What do you need?',
            choices: [
                { title: 'Transform banner to video', value: 'bannerToVideo' },
                { title: 'Generate a backup image from a banner', value: 'backupImage' },
                { title: 'Generate frames from a banner', value: 'extractFrames' },
                { title: 'Optimize a builded banner', value: 'optimizeBuildedBanner' }
            ],
            initial: 0
        },
    ];

    const response = await prompts(questions);
    
    global.mainTask = response.task;

    return;
}

module.exports = mainQuestions