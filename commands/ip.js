const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Ip")
    .setDescription("Laat het ip van de server zien")
    .setColor("#14fc03")
    .addField("Het ip is nog niet klaar", "**ip**")

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "ip"
}