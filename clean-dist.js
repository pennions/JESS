const fs = require('fs');
const path = require('path');

function cleanup() {
    const dirPath = './dist';

    try {
        var files = fs.readdirSync(dirPath);
    } catch (e) {
        return;
    }
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const filePath = path.join(dirPath, files[i]);
            if (fs.statSync(filePath).isFile())
                fs.unlinkSync(filePath);
            else
                rmDir(filePath);
        }
    }
}

cleanup();