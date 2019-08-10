const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
var coolImages = require('cool-images')
const Canvas = require('canvas');
const chalk = require('chalk');
const fs = require('fs');
const sql = require('sqlite');
const moment = require('moment');
const db = require("quick.db");
const express = require("express");
const http = require("http");
const app = express();
const talkedRecently = new Set();
let stats = 0;
require('./util/eventLoader')(client);

app.get("/", (req, res) => {
  res.sendStatus(200)
});
app.listen(3000)

setInterval(() =>{
  
  http.get("http://ubiquitous-dosa.glitch.me");
  console.log("Sharder Pinged!");
  http.get("http://leeward-vein.glitch.me");
  console.log("Shard 1 Pinged!");
  http.get("http://blush-hubcap.glitch.me");
  console.log("Shard 2 Pinged!");
  
}, 1500)

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
/*
client.on('message', async (message, msg) => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var otocevapas;
  let mesaj = args.slice(0).join(' ');
  if (command === "otomatik-as") {
  if (mesaj === 'aktif', 'aç', '1') {
  otocevapas = 1
  } else if (mesaj === 'deaktif', 'pasif', 'kapat', 'kapa', 'kapalı', '0') {
  otocevapas = 0
  } else if (mesaj === '')
    if (otocevapas === 1) {
      message.channel.send('Otomatik Selam Alma : Aktif')  
    } else if (otocevapas === 0) {
      message.channel.send('Otomatik Selam Alma : Pasif')  
    }
  }});
client.on('message', msg => {
  var otocevapas;
  if (otocevapas === 1) {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam, Hoş Geldin! :smile:');  
  };
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.reply('Aleyküm selam, Hoş Geldin! :smile:');  
  }
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.reply('Aleyküm selam, Hoş Geldin! :smile:');  
  }} else return;
}); */
  
/*
client.on('message', async (msg) => {
  if (msg.content.toLowerCase() === '#mowailezirveyedoğru') {
    const asdf = await client.channels.get(msg.channel.id).createInvite()
    client.channels.get('595332256365805568').send(msg.author.tag + `, Mowa ile Zirveye Doğru HashTag'ini Kullandı! ` + asdf.url);  
  };
  if (msg.content.toLowerCase() === '#mowa') {
    const asdf = await client.channels.get(msg.channel.id).createInvite()
    client.channels.get('595332256365805568').send(msg.author.tag + `, Mowa HashTag'ini Kullandı! ` + asdf.url);  
  };
  if (msg.content.toLowerCase() === '#mowabot') {
    const asdf = await client.channels.get(msg.channel.id).createInvite()
    client.channels.get('595332256365805568').send(msg.author.tag + `, Mowa Bot HashTag'ini Kullandı! ` + asdf.url);  
  };
});
*/

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "giriş-çıkış");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "üye");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	member.send("Aramıza hoş geldin! Artık @üye rolüne sahipsin!")
	
});

/*
client.on("message", async message => {
  
  if(message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  
  var id = message.author.id;
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  
  if(!lvl) {
    
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    
  } else {
    
    var random = Math.random() * (8 - 3) + 3;
    db.add(`xp_${id}_${gid}`, random.toFixed());
    console.log(xp);
    
    if(xp > xpToLvl) {
      
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(`xpToLvl_${id}_${gid}`, await db.fetch(`lvl_${id}_${gid}`) * 100);
      message.channel.send("Tebrikler, " + message.author + ". Seviye atladın! Yeni seviyen: **" + lvl + "**");
      
    }
    
  }
  
  
  
});
*/
// aa



// aa

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip1) permlvl = 4;
  if (message.author.id === ayarlar.sahip2) permlvl = 4;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 5;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

// aaaaaaa

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

/*
client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.find(ch => ch.id === '542690578798739456', '606479559780466719');
	if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'gelen-giden');
  } else if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'hoşgeldiniz');
  } else if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'gelenler');
  } else if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'hoşgeldin');
  }
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(`http://anako.com.tr/skin/images/backend/mountains1.png`);
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.fillText('Sunucudan Ayrıldı!,', canvas.width / 2.5, canvas.height / 2.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.5);
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(attachment);
});

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.id === '542690578798739456', '606479559780466719');
  if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'gelen-giden');
  } else if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'hoşgeldiniz');
  } else if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'gelenler');
  } else if (!channel) {
    const channel = member.guild.channels.find(ch => ch.name === 'hoşgeldin');
  }
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(`http://anako.com.tr/skin/images/backend/mountains1.png`);
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.fillText('Sunucuya Hoşgeldin!,', canvas.width / 2.5, canvas.height / 2.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.5);
	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 4;
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(attachment);
});
*/
// aaaaaaa





// SUNUCU İSTATİSTİK

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  let mesaj = args.slice(0).join(' ');
  if (command === "stattemizle") {
  if (!message.guild.channels.find(channel => channel.name === mesaj)) return message.channel.send(" İstatistik ayarlanmamış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      const a = message.guild.channels.find(channel => channel.name === mesaj).delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Üye Sayısı: ${message.guild.memberCount}`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Bot Sayısı: ${message.guild.members.filter(m => m.user.bot).size}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Kanal Sayısı: ${message.guild.channels.size}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
    stats = 0;
      message.channel.send(" Kanallar temizlendi.")
    }
  
      if (command === "statayarla") {
        if (mesaj.length < 1) {
    mesaj = "SUNUCU İSTATİSTİKLER";
        } else {
          if (message.guild.channels.find(channel => channel.name === mesaj)) return message.channel.send(" Zaten istatistik ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
  message.channel.send(`Kategori ve kanal kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel(mesaj, 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);

 message.guild.createChannel(`Üye Sayısı: ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === mesaj)));
 message.guild.createChannel(`Bot Sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === mesaj)));
message.guild.createChannel(`Kanal Sayısı: ${message.guild.channels.size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === mesaj)));
        stats = 1;
  message.channel.send(" Sunucu paneli ayarlandı!")
        })
}
    }
});

// SUNUCU İSTATİSTİK
/*
client.on('ready', msg => {
  setInterval(function() {
    client.channels.get('542683875449634827').send('Hacked By W-Logger And TunaBey')
}, 500);
})*/

/*
client.on('ready', member => {
  //client.channels.get('532991144112554005').react(':six:')
  //client.channels.get('532991144112554005').react(':eight:')
  //client.message.find(`601413121575485450`).react(`:two:`);
  setInterval(function() {
    //client.guilds.get('570575413961687050').leave;
    //client.guilds.get('600257887264047123').me.setNickname(`Mowa -Turkuqz Ağlıyo`);
    client.guilds.get('578544543775981568').me.setNickname(`Mowa [m_]`);
    client.guilds.get('587671978463199233').me.setNickname(`🤴| Mowa`);
    client.guilds.get('532991144112554005').me.setNickname(`Mowa`);
    
}, 500);
      
});
*/
client.login(process.env.TOKEN);
