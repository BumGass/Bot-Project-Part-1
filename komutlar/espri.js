const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

const cevaplar = [
    '- Hindi Kalabalığa Girmiş Ne Demiş?\n+ Ne Demiş?\n"Bu Ne Galabalık, Bu Ne Galabalık" Demiş.',
    "Rock yapmayan kişiye ne denir?\n- yaprock.",
    "Ben Yedigün içiyorum sen Onbeşgün iç.",
    "Sinemada on dakika ara dedi, aradım aradım açmadı.\nRöntgen Filmi çektirdik, yakında sinemalarda.",
    "Yeni yapılmış resimlere ne denir?\n- **nev**resim.",
    "Elektriği Edison buldu ama parasını niye biz ödüyoruz.",
    "İngilizler Ne İzler?\nİngil İzler...",
    "İnsanların seni ezmesine izin verme;\nEhliyet al sen onları ez.",
    "Mafya babası olmak için oğlumun adını **Mafya** koydum.\nArtık mafya babasıyım.",
    "Zenginler et,fakirler hayalet yer.",
    "Canın sıkıldıysa gevşet.",
    "Pişmemiş burgere ne denir?\n-**Ham** Burger.",
    "Yıkanan ton balığına ne denir?\n-Washington.",
    "Geçen gün taksi çevirdim hala dönüyor.",
    "Sakla samanı inekler aç kalsın.",
    "Adamın kafası atmış bacakları eşek.",
    "Dünya döner ay köfte.",
    "Adamın biri varmış,ikinci dönem düzeltmiş.",
    "Koltuk altı spreyi aldım.\nEvdeki tüm koltukların altına sıktım.",
    "Sperm gibi adamlar var insan olma ihtimalleri milyonda bir.",
    "İyi ki İtalya'da doğmamışız!\nNeden?\nÇünkü İtalyanca bilmiyoruz.",
    "Yarasa yararlı bir hayvandır.\nYararlı olmasaydı yaramasa derlerdi.",
    "Kızı görme engelli diye karşıdan karşıya geçirdim.\nElindeki selfie çubuğuymuş.",
    "Çiçek gibisin.\nSulamayınca soluyorsun."
];

exports.run = (client, message, params) => {
  
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')
return message.author.sendEmbed(ozelmesajuyari); }
  var espiri = cevaplar[Math.floor(Math.random() * cevaplar.length)];
if (message.channel.type !== 'dm') {
      const espri = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setDescription(espiri)
    .setImage()
    .setAuthor(message.author.tag + ', Güzel Espri 🤣')
    return message.channel.sendEmbed(espri);
    }
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'espri',
description: 'Espri Yapar.',
usage: 'espri'
};