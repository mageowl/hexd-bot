const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Bot is go!");
});

client.on("message", async (msg) => {
	if (msg.content === ".ping") {
		if (!message.guild) return;

		const guild = msg.guild;
		const member = await guild.members.fetch(msg.author);
		if (member.roles.highest && member.roles.highest.name === "moderator") {
			const embed = new Discord.MessageEmbed().setTitle("Status Report").setColor(0x30f04d);
			msg.channel.send(embed);
		}
	}
});

client.login(process.env.__DISCORD_BOT_TOKEN);