const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Info")
    .setDescription("Info Commando")
    .setColor("#ff0d00")
    .addField("Wie zijn wij?", "Wij zijn magicplacecraft! Een minecraft attractie park server voor 1.15.2")
    .addField("Openingsdatum", "Nog niet bekend")
    .addField("Ip", "Nog niet klaar")
    .addField("Status", "In Aanbouw")
    .setFooter("Bot by Multi Host")

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}