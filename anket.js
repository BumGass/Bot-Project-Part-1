const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');



exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');

const Anket = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .setDescription('**--------------------------**')
    .setImage()
    .setTitle('**' + mesaj + '**')
    .setAuthor('Anket')
    .addField('**--------------------------**')
if (mesaj.length < 1) return message.reply('Anket İçin Herhangi Bir Soru Yazmalısın.');
  message.delete();
    return message.channel.sendEmbed(Anket);

};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'anket',
description: 'Anket Yapar. Emoji Koymaz.',
usage: 'anket'
};