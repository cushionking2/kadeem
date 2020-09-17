const Discord = require("discord.js");
const client = require('../index.js')

module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Sends ping of Kadeem',
	guildOnly: true,
	async execute(message, args) {
		const msg = await message.channel.send(`Pinging...`)
		const ping = msg.createdTimestamp - message.createdTimestamp;
		message.delete.bulkDelete(1, true);
        message.channel.send("Kadeem's brain runs at `" + `${ping}` + " ms`");
	},
};