var Jimp = require('jimp');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  var user = message.mentions.users.first() || message.author;
message.channel.send(`<@` + user.id + `> Dogri Diyor... \n https://youtu.be/jcHJmWls-BQ?t=172`)
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dogridiyor', 'doğru-söylüyor'],
  permLevel: 0
};

exports.help = {
  name: 'doğrusöylüyor',
  description: `Troll Amaçlı Bir Ay lav yu Videosu.(Dikkat Video Küfür Barındırmaktadır)`,
  usage: 'doğrusöylüyor'
};