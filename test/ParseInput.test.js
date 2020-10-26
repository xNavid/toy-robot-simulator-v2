const { expect } = require('chai');
const ParseInput = require('../src/ParseInput')


describe('Parse Input', () => {
    const parseInput = new ParseInput();

    it('throws error if no commands are not parsed', () => {
        parseInput.parseArguements('', (err) => {
            expect(err).to.exist;
        });
    });

    it('expects the first command to be PLACE', () => {
        const sampleCommand = 'PLACE 1,1,SOUTH\nMOVE\nRIGHT\nRIGHT\nMOVE\nREPORT';
        parseInput.parseArguements(sampleCommand, (err, commandsList) => {
            expect(err).to.throw
            expect(Object.values(commandsList)[0].command).to.equal('place')
        })
    })

});