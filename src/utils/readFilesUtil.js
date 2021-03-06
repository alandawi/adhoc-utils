const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const readFilesUtil = async (dir) => {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? readFilesUtil(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

module.exports = readFilesUtil