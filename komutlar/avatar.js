const Discord = require('discord.js');


exports.run = function(client, message) {
 var user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setAuthor(user.tag, user.avatarURL)
        .setImage(user.avatarURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['avatarım', 'pp', 'logo', 'icon', 'avatar'],
  permLevel: 0 
};

exports.help = {
  name: 'logo', 
  description: 'Logonuzu Gösterir.',
  usage: 'logo'
};