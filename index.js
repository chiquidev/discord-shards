const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, token } = require('./config.json');


client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.on('message', (message) => {
    if(message.content.startsWith('shard')) {
      message.channel.send(`Mi shard en este servidor es: **${shard.id}**`);
    }

});

client.login(config.token).catch(console.error);
