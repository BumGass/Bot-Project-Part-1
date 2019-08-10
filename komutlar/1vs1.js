const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');


exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
	let opponent = message.mentions.users.first()
	if (!opponent) return message.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
 /* message.guild.createChannel('Düellolar', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);
  message.guild.createChannel(`${message.author.username} vs ${opponent.username}`, 'text')
  .then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === 'Düellolar')));*/
  
  if (opponent.bot) return message.reply('Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('Kendin ile düello atamazsın!');
		if (this.fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir düello meydana gelebilir.');
		this.fighting.add(message.channel.id);
		try {
			if (!opponent.bot) {
        const teklif = new Discord.RichEmbed()
        .setColor(message.guild.me.displayColor)
        .setAuthor(`Mowa Bot Düello Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
        .setTitle(`**${opponent.username}, düello isteği geldi,**`)
        .addField(`**Düello'yu kabul ediyor musun?\nLütfen Sadece evet veya hayır Olarak Cevap Veriniz.**`, `İyi Oyunlar ve İyi Şanslar Dileriz...`)
        .setDescription(``)
        .setThumbnail(opponent.avatarURL)
        .setTimestamp()
        .setFooter(`Teklif Eden: ${message.author.tag} `)
                await message.channel.send(teklif);
				const verification = await verify(message.channel, opponent);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`Düello kabul edilmedi...`);
				}
			}
			let userHP = 500;
			let oppoHP = 500;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) oppoHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else oppoHP = 0;
			};
			while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : opponent;
				let choice;
				if (!opponent.bot || (opponent.bot && userTurn)) {
          const komutlar = new Discord.RichEmbed()
          .setColor(message.guild.me.displayColor)
          .setAuthor(`Mowa Bot Düello Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
					.setTitle(`${user.username}, ne yapmak istersin?`)
          .setDescription(`**saldır, savun, ultra güç, can bas veya kaç?**`)
          .setThumbnail(user.avatarURL)
          .addField(`**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`, `İyi Oyunlar ve İyi Şanslar Dileriz...`)
          .setTimestamp()
          .setFooter(`Oynayanlar: ${opponent.tag}, ${message.author.tag} `)
					await message.channel.sendEmbed(komutlar);
					const filter = res =>
						res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'can bas', 'canbas', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['saldır', 'savun', 'can bas', 'canbas', 'ultra güç'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'saldır') {
            const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
					await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'savun') {
					await message.channel.send(`${user}, kendisini süper kalkan ile savundu!`);
					guard = true;
					reset(false);
				} else if (choice === 'can bas') {
         if (user === message.author) {
           if (userHP <= 250) {
             userHP = Math.floor(50+userHP)
             					await message.channel.send(`${user}, kendisine süper iksir ile 50 can bastı!`);
           } else if (userHP >= 250) message.channel.send(`${user}, Canın 250'nin Altına Düşmediği Sürece Can Dolduramazsın.`);
            } else if (user === opponent) {
           if (oppoHP <= 250) {
           oppoHP = Math.floor(50+oppoHP)
             					await message.channel.send(`${user}, kendisine süper iksir ile 50 can bastı!`);
           } else if (oppoHP >= 250) message.channel.send(`${user}, Canın 250'nin Altına Düşmediği Sürece Can Dolduramazsın.`);
         };
					guard = true;
					reset(false);
				} else if (choice === 'canbas') {
         if (user === message.author) {
           if (userHP <= 250) {
             userHP = Math.floor(50+userHP)
             await message.channel.send(`${user}, kendisine süper iksir ile 50 can bastı!`);
           } else if (userHP >= 250) message.channel.send(`${user}, Canın 250'nin Altına Düşmediği Sürece Can Dolduramazsın.`);
            } else if (user === opponent) {
           if (oppoHP <= 250) {
           oppoHP = Math.floor(50+oppoHP)
             await message.channel.send(`${user}, kendisine süper iksir ile 50 can bastı!`);
           } else if (oppoHP >= 250) message.channel.send(`${user}, Canın 250'nin Altına Düşmediği Sürece Can Dolduramazsın.`);
         };
					guard = true;
					reset(false);
				} else if (choice === 'ultra güç') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 150 : 300);
						await message.channel.send(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ultra güç kullanamadın!`);
					}
					reset();
				} else if (choice === 'kaç') {
					await message.channel.send(`${user}, kaçtı! Korkak!`);
					forfeit();
         /* message.guild.channels.find(channel => channel.name === 'Düellolar').delete()
          message.guild.channels.find(channel => channel.name === `${message.author.username} vs ${opponent.username}`).delete() */
					break;
				} else {
					await message.reply('Ne yapmak istediğini anlamadım.');
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
      const end = new Discord.RichEmbed()
      .setColor(message.guild.me.displayColor)
      .setAuthor(`Mowa Bot Düello Sistemi`, `https://cdn.discordapp.com/attachments/593912763760508928/601412492882870282/1.2.png`)
      .setTitle(`**Oyun bitti! Tebrikler, **${winner.username}** kazandı!**`)
      .setDescription(`**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`)
      .setThumbnail(winner.avatarURL)
      .setTimestamp()
      .setFooter(`Kazanan: ${winner.tag} `)
			 message.channel.sendEmbed(end);
		} catch (err) {
    /*  message.guild.channels.find(channel => channel.name === 'Düellolar').delete()
      message.guild.channels.find(channel => channel.name === `${message.author.username} vs ${opponent.username}`).delete() */
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duello', '1v1', 'savaş', 'düello', 'düellö', 'duellö'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: '1vs1',
  category: "eğlence",
  description: 'İstediğiniz Kişi ile 1vs1!',
  usage: '1vs1 <@kullanıcı>'
};
