const Discord = require("discord.js");

module.exports = {
	name: 'react',
	description: 'react with letter emojis',
	execute(message, args) {
		//ARRAY OF UNICODE TEXT EMOJIS
		const letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];

		var index = 0;
		var letter = "";
		var text = "";

		if(!args[0]){
		  return message.reply('Enter a word or line of text you stupid idiot');
		}
		while(args[index]){
		  text = args[index].toLowerCase();
		  for(var i = 0; i < text.length; i++){
			if (text[i] != " " && text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122){ //check if it is a letter
			  message.react(letters[text.charCodeAt(i) - 97]);
			}
		  }
		  index++;
		}
	},
};