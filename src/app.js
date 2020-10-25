const ParseInput = require('./ParseInput');
const Robot = require('./Robot');
const FileReader = require('./FileReader');

// Create new parseinput instance
const parseInput = new ParseInput();
// Create new robot instance
let robot = new Robot();
// Create new file reader instance
const fileReader = new FileReader();

// Parse a file
parseFile = (file, callback) => {
    fileReader.readNewFile(file, (error, fileData) => {
        if (error) {
            callback(error);
            return
        }

        parseInput.parseArguements(fileData, (error, commands) => {
            if (error) {
                callback(error);
                return
            }
            callback(null, commands);
        })
    });
};

// Run the robot
runRobot = (file, callback) => {
    parseFile(file, (error, commands) => {
        if (error) {
            callback(error);
            return
        }
        robot.executeCommands(commands);
        callback(null, robot);
    });
};

module.exports = {
    parseFile,
    runRobot,
};