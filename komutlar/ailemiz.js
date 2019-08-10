const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id + ' ', true);
      embed.setColor('#D97634')
      embed.setTitle(`Büyük Bir Aileyiz !`)
      embed.setAuthor(`Mowa Bot Ailesi` , `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
      embed.setDescription(`Ailemizde **${bot.guilds.size}** Sunucu, **${bot.channels.size}** Kanal ve **` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** Kişi Var !`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aile'],
  permLevel: 4
};

exports.help = {
  name: "ailemiz",
  description: "Botun Olduğu Sunucuları Gösterir.",
  usage: "ailemiz"
};