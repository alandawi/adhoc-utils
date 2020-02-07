const prompts = require('prompts');

const exportQuestions = async () => {
    const questions = [
        {
            type: 'text',
            name: 'size',
            message: 'Banner size:'
        },
        {
            type: 'text',
            name: 'duration',
            message: 'Banner duration (in seconds):'
        },
        {
            type: 'select',
            name: 'quality',
            message: 'Select the output quality',
            choices: [
                { title: 'High', value: '1' },
                { title: 'Medium', value: '0.6' },
                { title: 'Low', value: '0.3' }
            ],
            initial: 0
        }
    ];

    const response = await prompts(questions);

    global.exportConfig = response;

    return;
}

module.exports = exportQuestions