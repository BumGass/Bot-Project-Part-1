const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip1) permlvl = 4;
  if (message.author.id === ayarlar.sahip2) permlvl = 4;
  let mesaj = args.slice(0).join(' ');
    if (permlvl === 4) {
      if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
    } else {
      message.channel.send('Bu Komut Sadece Sahiplerim Tarfından Kullanılabilir. Yetkin Yok.')
    }
    

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adminsay', 'adminsöyle'],
  permLevel: 4
};

exports.help = {
  name: 'adminyaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'adminyaz [yazdırmak istediğiniz şey]'
};
