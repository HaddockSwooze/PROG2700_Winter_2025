//
//"npm i" to install node modules, then "node index.js" to run this script.
//

const fs = require('fs');
const { json } = require('stream/consumers');

// Load JSON data
fs.readFile('bruinsPlayers.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse JSON data
    const jsonData = JSON.parse(data);



    // Iterate over the JSON data
    console.log("team ", jsonData.team);
    console.log("founded ", jsonData.founded);
    console.log("captain ", jsonData.captain.name);
    console.log("arena ", jsonData.arena.name);
    console.log("city ", jsonData.arena.location);

    console.log("number of players ", jsonData.players.length);

   
    if (jsonData.players.length > 0) {
        for (let i = 0; i < jsonData.players.length; i++) {
            let player = jsonData.players[i];
            console.log("player ", player.name, player.position, player.age);
        }
    }

});