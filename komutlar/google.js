const Discord = require("discord.js");

var renkler = [
  "0x4285F4",
  "0xDB4437",
  "0xF4B400",
  "0x0F9D58"
]


module.exports.run = async (client, message, args) => {

var random = Math.floor(Math.random()*(renkler.length-0+1)+0);
var renk = renkler[random];

    let youtube = args.slice(0).join('+');

        let link = `https://www.google.com.tr/search?safe=active&source=hp&ei=lqovXZjfOYuy6QSTgqfYDQ&q=` + youtube;
        if(!youtube)return message.reply(`Arama İşlemini Gerçeklerştirmek İçin Kelimeler Girin!`)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
              .setColor(renk)
              .setAuthor(`Mowa Bot Google Arama Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
              .setTitle(`**Aradığın link bulundu...**`)
              .setURL(link)
              .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png`)
              .setDescription(``)
              .setTimestamp()
              .setFooter(`Aratan : ${message.author.username} `, message.author.avatarURL)
              message.channel.send(embed);
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['google'],
  permLevel: 0
};

exports.help = {
  name: 'ara',
  description: `Google'da Arama Yapar.`,
  usage: 'ara <metin>'
};