const { expect } = require('chai');
const Robot = require('../src/Robot');

describe('Robot', () => {
    let robot = new Robot();

    it('throws error if robot is placed off table', () => {
        robot = robot.place([7, 9, 'east']);
        expect(robot.isPlaced).to.be.false;
    });

    it('ignores commands that cause robot to fall off table', () => {
        robot = robot.place([5, 5, 'south']);
        robot = robot.move();
        robot = robot.move();
        robot = robot.move();
        robot = robot.turn('left');
        robot = robot.move();
    });
});