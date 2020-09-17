require('dotenv').config(); 
const Discord = require("discord.js");
const prefix = process.env.PREFIX;
const token = process.env.CLIENT_TOKEN;
const version = process.env.VERSION;
const fs = require("fs");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//pictures
const LULW = new Discord.MessageAttachment('./emotes/LULW.png');
const kadeem = new Discord.MessageAttachment('./emotes/kadeem.png');

client.once("ready", () => {
  console.log("Ready!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on('ready', () => {
      client.user.setActivity('KADEEM\'S FAVES', {
              type: "STREAMING",
              url: "https://www.twitch.tv/xqcow"
      });
  });

//message listeners
client.on('message', message =>{
  if (message.author.bot) return; //check if the message comes from the bot
  const text = message.content.toLowerCase();

  if(text.includes('true')){
      message.channel.send('ANY TRUERS? ');
      message.channel.send(LULW);
  }

  if(text.includes('nice')){
    message.channel.send('nice');
  }

  if(text.includes('league')){
      message.channel.send('league is a dogshit game run by a dogshit company');
  }

  if(text.includes('xd')){
    message.channel.send('hehe xd');
  }

  if(text.includes('cringe')){
    message.channel.send('cringe lol');
  }

  if(text.includes('kadeem')){
    message.channel.send('im kadeem');
  }

  if(text.includes('monkey')){
    message.react('🐒')
  }
})


client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (command.guildOnly && message.channel.type === 'dm') { //guild only checker
    return message.reply('I can\'t do that shit in the DMs sorry brah');
  }

  if (!cooldowns.has(command.name)) { //cooldown checker
    cooldowns.set(command.name, new Discord.Collection());
  }
  
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;
  
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(`Yo <@` + message.author + `> wait ${timeLeft.toFixed(1)} more seconds before reusing the \`${command.name}\` command you fuckin spaz ass`)
      .then(msg => {
        msg.delete({timeout: expirationTime - now})
      })
      .catch(console.error);
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('the command is fucked try again');
  }
});



client.login(process.env.CLIENT_TOKEN);