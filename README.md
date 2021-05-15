 # Uso de sharding con la librería discord.js  
En este repositorio os explicaré como es el uso del sistema de sharding para bots de la plataforma de discord.

## ¿Qué necesito? 
Para el uso de este repositorio tan solo debes tener la librería **discord.js** descargada.

## ¿Puedo adaptarlo a mi gusto?
¡Obviamente! Esto es solo un ejemplo, el archivo `shard.js` puedes añadirlo a tu bot, y automáticamente generará los shards.
 
## ¿Qué cambios realiza esto en mi bot?
- No son muchos cambios los que realizará el bot, el sharding lo que realiza es como si cortaras tu bot en dos o más mitades, por tanto, si una de estas "particiones" falla, tan solo los servidores que esten asignados a esa partición sufrirán la caída o problema, y las demás particiones continuarán estables.

## ¿Y qué cambios sufre mi servicio de hosting? 
- Al lanzar diferentes particiones, el consumo del bot se multiplicará por la cantidad de shards/particiones que hayamos ejecutado.
 
## ¿Cómo puedo ver en que shard se encuentra mi servidor?
- La función que muestra en que shard se encuentra cierto servidor es: `${message.guild.shardID}`, en este ejemplo yo he realizado que con el comando `-shard` te muestre una respuesta con el shard en el que se encuentra tu bot. 
 
## ¿Cómo ejecuto el bot?
- A diferencia de un bot normal, aquí no tienes que lanzar el bot con `node index.js`, aquí deberás ejecutar el archivo `shard.js`

## Entonces, ¿qué comando he de ejecutar por consola?
- Deberás ejecutar el comando `node shard.js`

## No lo entendí... ¿Cómo puedo contactar contigo?
Puedes abrirme una **issue** desde aquí, o puedes contactarme a través de mi servidor de Discord o a través de mi usuario de Discord, `Chiquicalris#1337`

### Gracias por leer!
Agradecería que me apoyases dandome una estrella o siguiéndome, a continuación te dejo algunos links de utilidad:
✨ · *[Servidor de Discord](https://discord.gg/VPjePtWV6f)* 
🔌 · *[Mi bot de Discord](https://docs.foxybot.ga)*
  
 
