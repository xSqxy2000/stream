var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  bot.user.setGame("💀DEAD USER...", "https://www.twitch.tv/ninja")
});



bot.login('NDk5NTAwMzU2NDEwMDE1NzU1.Xpctjg.3Uo4FiQ2fMPgabvR38rSDKW_wUc'); 
