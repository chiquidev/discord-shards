// IMPORTACIONES
const Discord = require("discord.js");;
const Manager = new Discord.ShardingManager('./index.js');

// SHARD
Manager.on('shardCreate', shard => console.log(`[LANZADO] ${shard.id} ejecutado correctamente.`));
Manager.spawn(2); // Aquí, debemos seleccionar el número de shards que deseamos ejecutar en nuestro bot. (Si ponemos auto, el manager seleccionará automáticamente el número de shards necesarios). 
/*
Aquí, debemos seleccionar el número de shards que 
deseamos ejecutar en nuestro bot. (Si ponemos auto, 
el manager seleccionará automáticamente el número de
shards necesarios).
*/
 
 
