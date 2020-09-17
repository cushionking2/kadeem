const Discord = require("discord.js");
 
module.exports = {
  name: 'clear',
  cooldown: 5,
  aliases: ['delete', 'remove'],
	description: 'SENDS BOT INFO',
	execute(message, args) {
        if(!args[0] || isNaN(args[0])){
            return message.reply('You didn\'t put a number dummy');
        }
        message.channel.bulkDelete(args[0], true);
	},
};