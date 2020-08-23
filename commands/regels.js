const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Regels")
    .setDescription("De regels op de server")
    .setColor("#0b03fc")
    .addField("Niet spammen", "Discord en minecraft")
    .addField("Geen racisme", "Discord en minecraft")
    .addField("Spreek geen staff tegen", "Discord en minecraft")
    .addField("Niet schelden", "Discord en minecraft")
    .addField("Ga niet van de paden af", "minecraft")
    .addField("Niet Ticket spammen", "Discord")
    .addField("Laat de bot niet crashen", "Discord")

return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "regels"
}