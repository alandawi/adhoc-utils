const readFilesUtil = require('../utils/readFilesUtil');
const replaceAll = require('../utils/replaceAll');
const moveFile = require('move-file');
const path = require('path');
const editFile = require("edit-file")

const optimizeBuildedBannerTask = async () => {
    let folder = [];

    const currentLocation = process.cwd();

    const excludedExtensions = ['.html', '.zip', '.rar'];

    await readFilesUtil("./")
    .then(files => {
        folder = files;
    })
    .catch(e => console.error(e));

    await folder.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        const fileName = path.basename(file);
        let destinationFolder = null;

        if (ext === '.png' || ext === '.gif'  || ext === '.jpg' || ext === '.jpeg' || ext === '.svg') {
            destinationFolder = 'img';
        } else if (ext === '.js') {
            destinationFolder = 'js';
        } else if (ext === '.css') {
            destinationFolder = 'css';
        } else if (ext === '.mp4' || ext === '.avi') {
            destinationFolder = 'videos';
        }

        if (!excludedExtensions.includes(ext)) {
            moveFile(`${currentLocation}/${fileName}`, `${currentLocation}/${destinationFolder}/${fileName}`);
        }
    });

    // TODO: remove setTimeout, use EventEmitter
    setTimeout(() => {
        editFile(`${currentLocation}/index.html`, text => text.replace('./main.js', 'js/main.js').replace('style.css', 'css/style.css'), err => {
            console.error(err);
            if (err) throw err
        })
    
        editFile(`${currentLocation}/css/style.css`, text => replaceAll(text, 'background:url(', 'background:url(../img/'), err => {
            console.error(err);
            if (err) throw err
        })
    }, 3000)
}

module.exports = optimizeBuildedBannerTask