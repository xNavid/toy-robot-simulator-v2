
// Require table size
const tableSize = { x: 5, y: 5 };

// Require valid directions and corresponding surrounding directions
const directions = {
    north: {
        value: 'north',
        left: 'west',
        right: 'east'
    },
    south: {
        value: 'south',
        left: 'east',
        right: 'west'
    },
    west: {
        value: 'west',
        left: 'south',
        right: 'north'
    },
    east: {
        value: 'east',
        left: 'north',
        right: 'south'
    }
};

// Initiate robot class
class Robot {
    constructor() {
        this.isPlaced = false;
        this.position = {
            x: null,
            y: null,
        };
        this.facing = null
    }

    place(positionParams) {
        let x = positionParams[0];
        let y = positionParams[1];
        const facing = directions[positionParams[2]].value;

        // Invalid placement
        if (x > tableSize.x || y > tableSize.y) {
            console.log('Invalid placement.');
            this.isPlaced = false;
            return this;
        }
        this.isPlaced = true;
        this.position.x = x;
        this.position.y = y;
        this.facing = facing;
        return this;
    }

    move() {
        if (!this.isPlaced) {
            console.log('Robot has not been placed');
            return this;
        }

        let x = this.position.x;
        let y = this.position.y;
        switch (this.facing) {
            case 'north':
                if (++y < tableSize.y) {
                    this.position = { x: x, y: y };
                }
                break;
            case 'east':
                if (++x < tableSize.x) {
                    this.position = { x: x, y: y };
                }
                break;
            case 'south':
                if (--y >= 0) {
                    this.position = { x: x, y: y };
                }
                break;
            case 'west':
                if (--x >= 0) {
                    this.position = { x: x, y: y };
                }
                break;
            default:
                break;
        }
        return this;
    }

    turn(facing) {
        if (!this.isPlaced) {
            console.log('robot has not been placed');
            return this;
        }

        const facingDirection = directions[this.facing][facing];
        if (facingDirection) {
            this.facing = facingDirection;
        }
        return this;
    }

    report() {
        if (!this.isPlaced) {
            console.log('robot has not been placed');
            return this;
        }
        console.log(('Report:') + '\n' + [this.position.x, this.position.y, this.facing.toUpperCase()])
        return this;
    }

    executeCommands(commandsList) {
        let commands;
        let toyRobot = this;
        for (let i = 0; i < commandsList.length; i++) {
            commands = commandsList[i];
            if (commands.args) {
                toyRobot = this[commands.command](commands.args);
            } else {
                toyRobot = this[commands.command]();
            }
        }
        return toyRobot;
    }
}

module.exports = Robot;