const prompts = require('prompts');

const mainQuestions = async () => {
    const questions = [
        {
            type: 'select',
            name: 'task',
            message: 'Beautiful day to perform tasks! What do you need?',
            choices: [
                { title: 'Export a banner to other format (image, video, etc)', value: 'export' },
                { title: 'Generate a backup image from a banner', value: 'backupImage' },
                { title: 'Another option....', value: 'another' }
            ],
            initial: 0
        },
    ];

    const response = await prompts(questions);
    
    global.mainTask = response.task;

    return;
}

module.exports = mainQuestions