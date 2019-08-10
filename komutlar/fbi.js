var Jimp = require('jimp');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  var user = message.mentions.users.first() || message.author;
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor(user.username, user.avatarURL)
.setImage('https://media.tenor.com/images/ac8c27e3a0ddfe9b296a1deedb641453/tenor.gif')
message.channel.sendEmbed(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fbi', 'fbı', 'federaller', 'federal', 'cops', 'aynasızlar', 'aynasız', 'fbi open the door'],
  permLevel: 0
};

exports.help = {
  name: 'FBI',
  description: `FBI Open The Door!`,
  usage: 'FBI <tag>'
};