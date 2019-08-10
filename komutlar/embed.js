const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var coolImages = require('cool-images')

exports.run = (client, message, args) => {
  message.delete();
  //let [başlık, resim, alt, altresim] = args.join(" ").split(" ");
  //if (!başlık) return message.channel.send(`Bir Başlık Yazmalısın.`)
  //if (!resim) return message.channel.send(`Bir Resim Linki Yazmalısın.`)
  //if (!alt) return message.channel.send(`Bir Footer Yazmalısın.`) 
  //if (!altresim) return message.channel.send(`Bir Footer Resim Linki Yazmalısın.`) 
  
  const uyemesaj = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setAuthor(`Mowa Bot - Üye Anketi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
    .setTitle(`Botumuzun Yeni Logosunun Seçiminde Kararsız Kaldık!`)
    .setDescription(`Bu İki Resimden Beğendiğinizi Seçmenizi Rica Ederiz...`)
    .setImage(`https://cdn.discordapp.com/attachments/593912763760508928/601410578594005013/Anket.png`)
    .setTimestamp()
    .setFooter(`Yazdıran : ${message.author.tag} `, message.author.avatarURL)
  //.setFooter(alt, altresim)
  message.channel.sendEmbed(uyemesaj);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eambed',
  description: 'embed.',
  usage: 'eambed <başlık> <resimlink> <altmesaj> <altresimlink>'
};
