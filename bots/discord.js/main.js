const process = require("process")
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
	if (msg.content === "ping") {
		msg.reply("Pong!");
	}
});

client.login(require("./token.js").secret_token);




// Keep these line on end of file, it allow a better display in Manager and fix a bug about killing node process
process.stdin.resume();process.stdin.setEncoding('utf8');
process.stdin.on('data',(chunk)=>{if(chunk=="quit"||chunk=="quit\n"){process.exit()}});
console.log("Bot ready"); // Keep this at end of file, it's used to mark server as Started
