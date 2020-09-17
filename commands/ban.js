const Discord = require("discord.js");
const { prefix, token, version } = require("../config.json");
 
module.exports = {
  name: 'ban',
  description: 'ban someone',
  guildOnly: true,
	execute(message, args) {
      if(message.member.hasPermission('BAN_MEMBERS') ||
         message.member.hasPermission('ADMINISTRATOR')) {
            const user = message.mentions.members.first();
            if (!user){
                return message.reply('make sure you mention someone how fuckin stupid are you?');
            }

            if(user.id === message.author.id){
                return message.reply('why u tryna ban yourself lol u stupid or what');
            }

            if(!user.bannable){
                return message.reply('I can\'t ban that user they are too op tf');
            }

            const target = message.guild.members.cache.get(user.id);
            target.kick('You got banned for being bad');
            return message.channel.send(`<@${user.id}> has been booted out of this bitch`);
      }
      else{
          message.reply('You don\'t have the permissions to kick fuckwad');
      }
	},
};