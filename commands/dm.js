const Discord = require("discord.js");

module.exports = {
    name: 'dm',
    description: 'dm a user something from the bot',
    guildOnly: true,
	execute(message, args) {
        const user = message.mentions.users.first();
        if (!user){
            return message.reply('make sure you mention someone how fuckin stupid are you?');
        }
        var index = 1;
        var text = "";
        while(args[index]){
            text += args[index] + " ";
            index++;
        }
        user.send(text);
        message.channel.send('DMed!')
	},
};