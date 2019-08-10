const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  if (message.channel.type !== 'dm') {
const bagis = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setTitle(`**Botun Vote Linkleri**`)
    .setDescription(`**https://discordbots.org/bot/593902627960520819 \n https://bots.ondiscord.xyz/bots/593902627960520819**`)
    .setAuthor(`Mowa Bot Projesi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTimestamp()
    .setFooter(`Sorgulayan: ${message.author.tag} `, `https://cdn.discordapp.com/avatars/284360912540925952/6927af6da4ccfd4ddfa4aef330ac71e0.png`)
message.channel.send(bagis)
      
} else {
  const bagis = new Discord.RichEmbed()
    .setColor(0x6441a5)
    .setTitle(`**Botun Vote Linkleri**`)
    .setDescription(`**https://discordbots.org/bot/593902627960520819 \n https://bots.ondiscord.xyz/bots/593902627960520819**`)
    .setAuthor(`Mowa Bot Projesi`, `https://cdn.discordapp.com/attachments/593912763760508928/595054661837520926/Amblem1PNG.png`)
    .setTimestamp()
    .setFooter(`Bot Sahibi: BumGass#9253 `, `https://cdn.discordapp.com/avatars/284360912540925952/6927af6da4ccfd4ddfa4aef330ac71e0.png`)
message.channel.send(bagis)
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: `Vote Linkleri İçin Kullanılır.`,
  usage: 'vote'
};