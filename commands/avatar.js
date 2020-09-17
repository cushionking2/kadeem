const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
	description: 'SENDS BACK IMAGE OF CHOSEN PERSONS PROFILE PIC',
	execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.MessageEmbed()
        .setColor(0x333333)
        .setAuthor(user.username)
        .setImage(user.avatarURL());
        message.channel.send(avatarEmbed);
	},
};