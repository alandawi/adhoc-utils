const prompts = require('prompts');

const exportQuestions = async () => {
    const questions = [
        {
            type: 'text',
            name: 'size',
            message: 'What is the size of the banner?'
        },
        {
            type: 'text',
            name: 'duration',
            message: 'What is the duration of the banner? (in seconds)'
        },
    ];

    const response = await prompts(questions);

    global.exportConfig = response;

    return;
}

module.exports = exportQuestions