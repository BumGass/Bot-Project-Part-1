var Jimp = require('jimp');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  if (message.channel.type !== 'dm') {
const invitelink = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setDescription(``)
    .setTimestamp()
    .setAuthor(`Mowa Bot`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**Davet Linkine Ulaşmak İçin Tıklayın...**')
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=593902627960520819&scope=bot&permissions=2146958847`)
    .setFooter(`Sorgulayan: ${message.author.tag} `, message.author.avatarURL)
message.channel.send(invitelink)
      
} else {
  const invitelink = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setDescription(``)
    .setTimestamp()
    .setAuthor(`Mowa Bot`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle('**Davet Linkine Ulaşmak İçin Tıklayın...**')
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=593902627960520819&scope=bot&permissions=2146958847`)
    .setFooter(`Sorgulayan: ${message.author.tag} `, message.author.avatarURL)
message.channel.send(invitelink)
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invitelink', 'invite-link', 'davetlink', 'davetkod', 'davetkodu', 'davetlinki', 'davet-kod', 'davet-link', 'davet-kodu', 'davet-linki', 'davet'],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: `İnvite Linkini Almak İçin Kullanılır.`,
  usage: 'invite'
};