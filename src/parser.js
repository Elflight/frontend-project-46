import path from 'path';
import fs from 'fs';

const getFullpath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileExtension = (filepath) =>path.extname(filepath);
const isFileExists = (fullpath) => fs.existsSync(fullpath);


const parseFile = (filepath) => {
    const fullpath = getFullpath(filepath);
    if (isFileExists(fullpath)) {
        const file = fs.readFileSync(fullpath);
        const ext = getFileExtension(fullpath);
        switch (ext) {
            case '.json':
                return parseJson(file);
            default:
                return false;
        }
    }
};

const parseJson = (data) => {
    return JSON.parse(data);
};

export default parseFile;