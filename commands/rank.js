const Discord = require("discord.js");
 
module.exports = {
    name: 'rank',
	description: 'return IRON IV with random LP',
	execute(message, args) {
        var lp = Math.floor((Math.random() * 100) + 1);
        message.channel.send('Iron IV ' + lp + 'lp');
	},
};