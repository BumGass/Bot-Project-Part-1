const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '284360912540925952')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Bot Destek | Talep")
  .setDescription("**Bot Destek Talebinde bulunduğun için teşekkür ederiz, Seninle Destek Ekibim ilgilenicektir lütfen bekle!**")
  .setFooter("30 Saniye içinde geri dönülmezse lütfen iletişime geçin @BumGass#9253")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Bot Destek | Talep")
  .addField("**Yeni Destek Talebi Oluşturuldu**")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      const serverinvite = new Discord.RichEmbed()
  .setAuthor("» Bot Destek | Talep")
  .addField("**Bot Destek Ekibine Duyurulur!!!** @Destek Ekibi")
  .addField("**Yeni Destek Talebi Oluşturuldu**")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      client.users.get(ayarlar.sahip).send(invite);
  client.channels.get(ayarlar.destek).send(serverinvite);
  const bildiri = new Discord.RichEmbed()
  .setAuthor("» Bot Destek | Talep")
  .addField('Merhaba **' + message.author.username +'**,')
  .addField(`Destek Talebini Destek Ekibim'e Ulaştırdım.`)
  .setFooter("30 Saniye içinde geri dönülmezse lütfen iletişime geçin @BumGass#9253")
     await message.channel.send(bildiri)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Destek Tablebi Oluşturur.',
  usage: 'destek <Talep Mesaj>'
};
