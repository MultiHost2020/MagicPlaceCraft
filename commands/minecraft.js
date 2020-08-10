const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Minecraft")
    .setDescription("Minecraft server info")
    .setColor("#bf6c13")
    .addField("Opening", "Niet Bekend")
    .addField("Ip", "!ip")
    .addField("Versie", "1.15.2")
    .addField("Regels", "!regels")
    .setFooter("Bot by Multi Host")

return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "minecraft"
}