const prompts = require('prompts');

const mainQuestions = async () => {
    const questions = [
        {
            type: 'select',
            name: 'task',
            message: 'Beautiful day to perform tasks! What do you need?',
            choices: [
                { title: 'Export banner to video', value: 'export' },
                { title: 'Generate a backup image from a banner', value: 'backupImage' },
                { title: 'Extract frames of a video', value: 'extractFrames' },
                { title: 'Optimize a builded banner', value: 'optimizeBuildedBanner' },
                { title: 'Another option....', value: 'another' },
            ],
            initial: 0
        },
    ];

    const response = await prompts(questions);
    
    global.mainTask = response.task;

    return;
}

module.exports = mainQuestions