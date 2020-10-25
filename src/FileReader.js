// Require fs for dealing with file system
const fs = require('fs');

// Initiate file reader class
class FileReader {
    readNewFile(file, callback) {
        // No file found return error
        if (!file) {
            return callback(new Error('File name is missing.'))
        }
        fs.readFile(file, { encoding: 'utf-8' }, (error, data) => {
            // Error happend while reading file
            if (error) {
                return callback(new Error('File not found.'));
            }
            // In case file is empty
            if (!data.length) {
                return callback(new Error('File is empty.'));
            }
            return callback(null, data);
        });
    }
};

module.exports = FileReader;
