var Jimp = require('jimp');
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  if (message.channel.type !== 'dm') {
const bagis = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setDescription(`Gio's botu hiç bir ücret talep etmeksizin, kullanıcıları için var olan, \n kullanıcılarının isteği doğrultusunda geliştirilen \n bir Open Source (Açık Kaynak Kodlu) Discord Botudur. \n Ve bu projeye destek vermek bu hizmete yapabileceğiniz \n en güzel teşekkürlerden birisidir.`)
    .setAuthor(`Gio's Bot Projesi`, `https://cdn.discordapp.com/attachments/593912763760508928/595054661837520926/Amblem1PNG.png`)
    .addField('Bağış Bilgileri \n IBAN = TR 15 00032 0 0000000050078326 \n İninal Barkod = 4 091350 078326 \n Papara No = 1816356577 \n Paycell Barkod = 4 460583 865322', 'Destekleriniz İçin Şimdiden Teşekkürler...')
    .setFooter(`Bot Sahibi: BumGass#9253`, `https://cdn.discordapp.com/avatars/284360912540925952/6927af6da4ccfd4ddfa4aef330ac71e0.png`, false)
message.channel.send(bagis)
      
} else {
  const bagis = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setDescription(`Gio's botu hiç bir ücret talep etmeksizin, kullanıcıları için var olan, \n kullanıcılarının isteği doğrultusunda geliştirilen \n bir Open Source (Açık Kaynak Kodlu) Discord Botudur. \n Ve bu projeye destek vermek bu hizmete yapabileceğiniz \n en güzel teşekkürlerden birisidir.`)
    .setAuthor(`Gio's Bot Projesi`, `https://cdn.discordapp.com/attachments/593912763760508928/595054661837520926/Amblem1PNG.png`)
    .addField('Bağış Bilgileri \n IBAN = TR 15 00032 0 0000000050078326 \n İninal Barkod = 4 091350 078326 \n Papara No = 1816356577 \n Paycell Barkod = 4 460583 865322', 'Destekleriniz İçin Şimdiden Teşekkürler...')
    .setFooter(`Bot Sahibi: BumGass#9253`, `https://cdn.discordapp.com/avatars/284360912540925952/6927af6da4ccfd4ddfa4aef330ac71e0.png`, false)
message.channel.send(bagis)
}};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bağış',
  description: `Bağış Bilgileri İçin Kullanılır.`,
  usage: 'bağış'
};