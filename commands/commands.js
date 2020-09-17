const Discord = require("discord.js");
 
module.exports = {
    name: 'commands',
    aliases: ['command'],
    cooldown: 5,
    description: 'SENDS detailed commands in DM',
    execute(message, args) {
        message.react('👍');
        message.author.send('Informational Commands: ' + '\n' +
                            '\t ❓ help: Shows information about KadeemBot and its command names' + '\n' +
                            '\t 🏓 ping: Gives the bot\'s latency to the server' + '\n' +
                            '\t 🏆 rank: Gives Kadeem\'s shitty ass rank');
        message.author.send('Random Action Commands: ' + '\n' +
                            '\t 🎲 roll [NUMBER]: Rolls a six-sided dice unless provided with the number of sides' + '\n' +
                            '\t 🅰️ bigtext [PHRASE]: Returns a given phrase back in emojis' + '\n' +
                            '\t 😝 react [PHRASE]: Reacts a given phrase in emojis on the message' + '\n' +
                            '\t 🚿 clear [NUMBER]: Clear messages from up to two weeks ago' + '\n' +    
                            '\t 🎱 8ball [QUESTION]: Ask a question and get an answer from the magic 8ball!' + '\n' +
                            '\t 📬 dm [@MENTION] [PHRASE]: DM a person with any message' + '\n' +
                            '\t 👱 avatar [USER]: Returns either the avatar of you or the person you mention' + '\n' +
                            '\t 🦵 kick [@MENTION]: Kick a bitch' + '\n' +
                            '\t 🔨 ban [@MENTION]: Ban a bitch' + '\n' +
                            '\t ⏲️ timer [NUMBER]: Set a timer in seconds');                     
    },
};