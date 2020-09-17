const Discord = require("discord.js");
const { prefix, token, version } = require("../config.json");
 
module.exports = {
  name: 'help',
  cooldown: 5,
  aliases: ['info', 'information'],
	description: 'SENDS BOT INFO',
	execute(message, args) {
	  const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Kadeem Alford')
      .setURL('https://twitter.com/kadeem1111?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
      .addFields(
        {name: 'Version ', value: version, inline: true},
        {name: 'Prefix ', value: prefix, inline: true},
        {name: 'Informational Commands', value: 'help, ping, rank'},
        {name: 'Commands that Do Shit', value: 'roll, bigtext, react, clear, 8ball, dm, avatar, kick, ban, timer'},
      )
      .setThumbnail('https://i.imgur.com/arNjXmt.png')
      .setImage('https://i.imgur.com/msdnsFp.png?1')
      .setTimestamp()
      .setFooter('Trying to get out of Iron IV', 'https://opgg-static.akamaized.net/images/medals/iron_1.png')

      message.channel.send(embed);
	},
};