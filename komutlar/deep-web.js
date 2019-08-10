var Jimp = require('jimp');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  var user = message.mentions.users.first() || message.author;
message.channel.send(`<@` + user.id + `> DeepWeb'e Girmişsin... \n https://youtu.be/GHTAtl3-eFc`)
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'deepweb',
  description: `Troll Amaçlı Bir Deep Web Videosu.(Dikkat Video Küfür Barındırmaktadır)`,
  usage: 'deepweb'
};