const Discord = require("discord.js");
const { prefix, token, version } = require("../config.json");
 
module.exports = {
  name: 'kick',
  aliases: ['remove'],
  description: 'kick someone',
  guildOnly: true,
	execute(message, args) {
      if(message.member.hasPermission('KICK_MEMBERS') ||
         message.member.hasPermission('ADMINISTRATOR')) {
            const user = message.mentions.members.first();
            if (!user){
                return message.reply('make sure you mention someone how fuckin stupid are you?');
            }

            if(user.id === message.author.id){
                return message.reply('why u tryna kick yourself lol u stupid or what');
            }

            if(!user.kickable){
                return message.reply('I can\'t kick that user tf they are too op');
            }

            const target = message.guild.members.cache.get(user.id);
            target.kick('You got kicked for being bad');
            return message.channel.send(`<@${user.id}> has been booted out of this bitch`);
      }
      else{
          message.reply('You don\'t have the permissions to kick fuckwad');
      }
	},
};