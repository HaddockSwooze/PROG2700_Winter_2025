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

<<<<<<< HEAD


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
=======
    console.log("name", jsonData.team);
    console.log("captain", jsonData.captain.name);
    console.log("arena", jsonData.arena.name);
>>>>>>> aeb53ace254f332aaf8cd45504eb90b010d47e8b

    console.log(jsonData.players.length);

    var players = jsonData.players;
    console.log(players.length);

    // Iterate over the JSON data
    let totalGoals = 0;
    for (let i = 0; i < jsonData.players.length; i++) {
        var player = jsonData.players[i];
        console.log(player.name);
        console.log(player.position);
        console.log(player.age);
        console.log(player.stats.goals);
        totalGoals += player.stats.goals;
    }
    console.log("totalGoals: ", totalGoals);
    console.log("avgGoals: ", totalGoals/jsonData.players.length);
});