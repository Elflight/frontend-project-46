import path from 'path';
import fs from 'fs';

const parseFile = (filepath) => {
    const fullpath = path.resolve(process.cwd(), filepath);
    if (fs.existsSync(fullpath)) {
        const file = fs.readFileSync(fullpath);
        const ext = path.extname(fullpath);
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