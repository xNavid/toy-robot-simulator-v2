// Require app 
const app = require('./src/app');

const file = process.argv[2]; // 3rd value is fileName arguement

console.log("TOY ROBOT SIMULATOR");

// Start the roboot
app.runRobot(file, (error, robot) => {
    if (error) return console.log('ERROR:' + ' ' + (err.message));
    if (!robot.isPlaced) return console.log('Robot placement is unsuccessful');
});