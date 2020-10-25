const directions = ['north', 'east', 'south', 'west'];

// Initiate parse input class
class ParseInput {
    // Parse the command arguements
    parseArguements(args, callback) {
        if (!args.length) return callback(new Error('No commands given.'));
        console.log('Your Commands:')
        console.log(' ')
        const parsedInput = args
            .split('\n')
            .map((commands) => {
                console.log(`${commands}`)
                return this.parseCommands(commands.toLowerCase());
            }).filter(x => !!x);
        console.log(' ')

        // No valid commands given
        if (!parsedInput.length) return callback(new Error('No commands were given to robot'));

        callback(null, parsedInput);
    }

    // Intialize placement
    initPlacement(position) {
        const positionList = position[1].split(',');

        const x = parseInt(positionList[0]);
        const y = parseInt(positionList[1]);
        const faces = positionList[2];
        if (!isNaN(x) && !isNaN(y) && directions.includes(faces)) {
            return {
                command: 'place',
                args: [x, y, faces]
            };
        } else {
            return null;
        }
    };

    inputCommand(commands) {
        switch (commands) {
            case 'move':
                return {
                    command: 'move'
                };
            case 'left':
                return {
                    command: 'turn',
                    args: 'left'
                };
            case 'right':
                return {
                    command: 'turn',
                    args: 'right'
                };
            case 'report':
                return {
                    command: 'report'
                };
            default:
                return null;
        }
    }

    // Parse the command
    parseCommands(commands) {
        let commandsObj;
        const commandsList = commands.split(' ');

        // Make sure first command is a place command
        if (commandsList.length > 1 && commandsList[0] === 'place') {
            commandsObj = this.initPlacement(commandsList);
        } else {
            commandsObj = this.inputCommand(commands);
        }
        if (commandsObj) {
            return commandsObj;
        }
    }
}

module.exports = ParseInput;

