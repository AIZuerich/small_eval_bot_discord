const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");

    let mentionedUser = message.mentions.users.first() || message.author;

        let embed = new Discord.MessageEmbed()

        .setImage(mentionedUser.avatarURL({ dynamic:true }))
        .setColor("00ff00")
        .setTitle("Avatar")
        .setFooter("Searched by " + message.author.tag)
        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar"
}