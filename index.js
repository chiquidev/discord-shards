const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log(`Estoy listo!`)
});


client.on('message', (message) => {
    const Discord = require("discord.js");
    if(message.content.startsWith('shard')) {
      message.channel.send(`Mi shard en este servidor es: **${message.guild.shardID}** y tiene un ping de **${message.guild.shard.ping}**ms`);
    }


    client.user.setPresence({
        game: 'online',
        activity: {
            name: `✨ #${message.guild.shard.status}`,
            type: 'WATCHING'
        }
    })
});

client.login(config.token).catch(console.error);
