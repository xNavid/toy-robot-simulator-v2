const { expect } = require('chai');
const FileReader = require('../src/FileReader')
const path = require('path')

describe('FileReader', () => {
    const fileReader = new FileReader();

    it('throws error if file is empty', () => {
        fileReader.readNewFile(path.join(__dirname, 'data/empty.txt'),
            (error) => {
                expect(error).to.exist;
            });
    });

    it('throws error if file does not exist', () => {
        fileReader.readNewFile(path.join(__dirname, 'data/doesnotexist.txt'), (error) => {
            expect(error).to.be.throw;
        });
    });
});


