const Discord = require('discord.js');
const client = new Discord.Client();
var coolImages = require('cool-images')

exports.run = (client, message) => {
  
  message.channel.send({embed: {
                       "image": {
                        url: coolImages.one()},
                        color: 0xD97634,
  }});};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['wallpaper', 'wp', 'duvar kağıdı', 'coolresim', 'duvar-kağıdı'],
  permLevel: 0
};

exports.help = {
  name: 'duvarkağıdı',
  description: `Duvar Kağıdı Almak İçin Kullanılır.`,
  usage: 'duvarkağıdı'
};