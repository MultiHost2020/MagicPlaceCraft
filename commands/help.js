const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Help")
    .setDescription("Het !help commando")
    .setColor("#fcd303")
    .addField("!info", "Laat de informatie over de server zien")
    .addField("!ip", "Laat de ip van de server zien")
    .addField("!minecraft", "Laat alle informatie over de minecraft server zien")
    .addField("!regels", "Laat de regels van de server zien")
    .setFooter("Bot by Multi Host")

return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "help"
}