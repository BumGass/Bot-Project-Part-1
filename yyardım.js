const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setDescription(`[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]`)
    .setAuthor(`Gio's Bot Komutları` , `https://cdn.discordapp.com/attachments/593912763760508928/595054661837520926/Amblem1PNG.png`)
  .addField(`${ayarlar.prefix}1vs1 = `, `İstediğiniz Kişi ile 1vs1!`)
  .addField(`${ayarlar.prefix}ailemiz = `, `Botun Olduğu Sunucuları Gösterir.`)
  .addField(`${ayarlar.prefix}alıntı = `, `Bir Mesaj Alıntılar.`)
  .addField(`${ayarlar.prefix}atatürk = `, `Atatürk Resmi Gönderir.`)
  .addField(`${ayarlar.prefix}logo = `, `Logonuzu Gösterir.`)
  .addField(`${ayarlar.prefix}bağış = `, `Bağış Bilgileri İçin Kullanılır.`)
  .addField(`${ayarlar.prefix}destek = `, `Destek Tablebi Oluşturur.`)
  .addField(`${ayarlar.prefix}canlıdestek = `, `Canlı Destek Tablebi Oluşturur. [BETA]`)
  .addField(`${ayarlar.prefix}deepweb = `, `Troll Amaçlı Bir Deep Web Videosu.(Dikkat Video Küfür Barındırmaktadır)`)
  .addField(`${ayarlar.prefix}emojiyazı = `, `Yazıyı Emoji Haline Getirir.`)
  .addField(`${ayarlar.prefix}emojiyükle = `, `Belirttiğiniz link ve isimde emoji yükler.`)
  .addField(`${ayarlar.prefix}espri = `, `Espri Yapar.`)
  .addField(`${ayarlar.prefix}fb = `, `PP'nize Fenerbahçe Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}gs = `, `PP'nize Galatasaray Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}bjk = `, `PP'nize Beşiktaş Çerçevesi Ekler.`)
  .addField(`${ayarlar.prefix}hastebin = `, `Hastebine Yazı Yüklersiniz.`)
  .addField(`${ayarlar.prefix}havadurumu = `, `Hava Durumunu Gösterir.`)
  .addField(`${ayarlar.prefix}herkesebendençay = `, `Herkese Çay Verir.`)
  .addField(`${ayarlar.prefix}servericon = `, `Serverin İconunu Gönderir.`)
  .addField(`${ayarlar.prefix}istatistik = `, `Bot İstatistiğini Gösterir.`)
  .addField(`${ayarlar.prefix}mcödül = `, `Minecraft Başarı Resmi Gönderir.`)
  .addField(`${ayarlar.prefix}rastgeleşifre = `, `Random Şifre Atar.`)
  .addField(`${ayarlar.prefix}reklam-taraması = `, `Sunucu İçerisindeki Tüm Reklamları Tarar.`)
  .addField(`${ayarlar.prefix}rol-bilgi = `, `Etiketlediğiniz Rol Hakkında Bilgi Alırsınız.`)
  .addField(`${ayarlar.prefix}simit = `, `Simit Yer.`)
  .addField(`${ayarlar.prefix}sorusor = `, `Sorularınızı Cevaplar.`)
  .addField(`${ayarlar.prefix}spotify = `, `Etiketlediğiniz Kişinin Spotify Üzerinde Dinlediği Şarkının Bilgilerini Verir.`)
  .addField(`${ayarlar.prefix}stresçarkı = `, `Sizin için bir stres çarkı çevirir.`)
  .addField(`${ayarlar.prefix}trigger = `, `Trigger.`)
  .addField(`${ayarlar.prefix}wasted = `, `PP'nize Wasted Efekti Ekler.`)
  .addField(`${ayarlar.prefix}yardım = `, `Tüm komutları gösterir.`)
  .addField(`${ayarlar.prefix}yaz = `, `İstediğiniz şeyi bota yazdırır.`)
    .setFooter(message.author.name + `, için Yardım Bilgileri`, message.author.avatarURL)
    message.channel.sendEmbed(yardım) 
/*  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  const yardım = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setDescription()
    .setAuthor(`Gio's Bot Komutları` , `https://cdn.discordapp.com/attachments/593912763760508928/595054661837520926/Amblem1PNG.png`)
    .addField(`= Komut Listesi =`, `[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]`, `${ayarlar.prefix}1vs1             :: İstediğiniz Kişi ile 1vs1!`, `${ayarlar.prefix}ailemiz          :: Botun Olduğu Sunucuları Gösterir.`)
    .setFooter(message.author.name + `, için Yardım Bilgileri`, message.author.avatarURL)
    message.author.send(yardım) 
    //message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
    if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
   // let command = params[0];
    const yardım = new Discord.RichEmbed()
    .setColor(0x00EDFF)
    .setDescription()
    .setAuthor(`Gio's Bot Komutları` , `https://cdn.discordapp.com/attachments/593912763760508928/595054661837520926/Amblem1PNG.png`)
    .addField(`= Komut Listesi =`, `[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]`, `${ayarlar.prefix}1vs1             :: İstediğiniz Kişi ile 1vs1!`, `${ayarlar.prefix}ailemiz          :: Botun Olduğu Sunucuları Gösterir.`)
    .setFooter(message.author.name + `, için Yardım Bilgileri`, message.author.avatarURL)
    message.author.send(yardım) 
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`); 
    } */
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y', 'yardım', 'yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yeniyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yeniyardım [komut]'
};