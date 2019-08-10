const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
 /*   var oyun = [
  ayarlar.prefix + "yardım | Geliştirme Aşamam Bitti✨",
  ayarlar.prefix + "yardım | " + ayarlar.prefix + "sunucutanıt🔥",
  ayarlar.prefix + "yardım | " + ayarlar.prefix + "reklamtarama⭐️",
  ayarlar.prefix + "bağış | " + ayarlar.prefix + "invite👍" 
  ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

      //  client.user.setActivity(oyun[random], { type : "WATCHING" });
      client.user.setGame(oyun[random], `https://www.twitch.tv/bumgass`);
      
        }, 2 * 2500);*/
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`Son Hazırlık Aşamasındayım..`);
  //client.user.setGame(`Deneme`, `https://open.spotify.com/track/4Ri6ODc2vpc3olej5Bc1L2?si=5gcMeNf-QimCgbqQsrVToA`);
  //client.user.setActivity(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
