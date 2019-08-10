const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');

const foto = [
    "https://media1.tenor.com/images/9bc96af34563931baaa6e3f071e4fc31/tenor.gif?itemid=12248775",
    "https://data.whicdn.com/images/301120937/original.gif",
    "https://thumbs.gfycat.com/MistyFarawayGrayreefshark-max-1mb.gif",
    "https://steamuserimages-a.akamaihd.net/ugc/923676156104456775/B80F6AC2F6EE78A306AB40D601FB9ADF8672E37C/",
    "https://data.whicdn.com/images/296273678/original.gif",
    "https://steamuserimages-a.akamaihd.net/ugc/777280472791431124/8EA74B304CA4B6F717D4926B48CC14B354B5A306/"
];

exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('Eğlence Komutları Özel Mesajlarda Kullanılamaz!')
return message.author.sendEmbed(ozelmesajuyari); }
  var thyke = foto[Math.floor(Math.random() * foto.length)];
if (message.channel.type !== 'dm') {
    const ataturk = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setTimestamp()
    .setDescription('')
    .setImage(thyke)
    return message.channel.sendEmbed(ataturk);

    }
;
};

    
    

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atatürk',
description: 'Atatürk Resmi Gönderir.',
usage: 'atatürk'
};