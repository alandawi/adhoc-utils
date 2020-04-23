const escapeRegExp = require('./escapeRegExp');

const replaceAll = async (str, find, replace) => {
    await str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

module.exports = replaceAll