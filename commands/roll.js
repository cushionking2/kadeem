const Discord = require("discord.js");
 
module.exports = {
  name: 'roll',
  aliases: ['dice', 'diceroll'],
	description: 'roll a 6 sided dice unless provided with a certain number of sides',
	execute(message, args) {
        if(!args[0]){
            var roll = Math.floor((Math.random() * 6) + 1);
            message.channel.send('Kadeem rolled a `' + roll + '`');
          }
          else if(!isNaN(args[0])){
            var sides = args[0];
            var roll = Math.floor((Math.random() * sides) + 1);
            message.channel.send('Kadeem rolled a `' + roll + '`');
          }
          else{
            message.reply('You fuckin did something wrong bruh');
          }
	},
};