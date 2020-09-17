const Discord = require("discord.js");

module.exports = {
	name: 'timer',
	description: 'countdown timer',
	async execute(message, args) {  
		if(isNaN(args[0])){
            return message.channel.send("You gotta put in a number you stupid bitch");
        }
        var time = args[0];

        message.channel.send("Countdown: " + time).then((msg)=>{
        const counter = setInterval(() => {
            if (time >= 0) {
              msg.edit("Countdown: " + time);
              time--;
            } else {
              msg.delete();
              message.channel.send("⏰Time's up loser⏰");  
              clearInterval(counter);
            }
          }, 1000)
        })
	},
};