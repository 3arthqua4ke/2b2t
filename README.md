<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/nVNDNGN2B6"><img src="https://www.speedrun.com/themes/2b2t/cover-256.png?version=c91c04de" width="546" alt="2b2t" /></a>
  </p>
  <br />


A Lightweight & easy to use 2b2t package for discord.js.

# Additional Dependencies Required: 
<img alt="discord.js" width="26px" src="https://discord.js.org/static/logo-square.png" /> [discord.js](https://github.com/discordjs/discord.js) `npm install discord.js`


<img alt="node-fetch" width="26px" src="https://avatars1.githubusercontent.com/u/59502381?s=200&v=4" /> [node-fetch](https://github.com/node-fetch/node-fetch) `npm i node-fetch`




# How to install: 
`npm install 2b2t`

## PrioQ: 

```js
const Discord = require('discord.js');
const client = new Discord.Client();
let prioQ = require('2b2t'); // Require 2b2t prioQ

client.on('message', async (message) => {

if(message.content === "!prioq") {

let prio = await prioQ();

const embed = new Discord.MessageEmbed()
.setTitle('2b2t Priority Queue:')
.setDescription(`Players in PrioQ: ${prio[1]}\n
Estimated Time in PrioQ: ${prio[2]}`)

message.channel.send(embed)

  }
})


```



# Support 
![https://discord.gg/nPPyxc4](https://discordapp.com/api/guilds/770734086766592020/widget.png?style=banner2)

# Credits:

Thank you [LolRiTTeR](https://github.com/LolRiTTeR) for the [2b2t API](https://2b2t.dev). 

Thank you [Discord.js](https://github.com/discordjs) for [discord.js](https://github.com/discordjs/discord.js).

Thank you [Node-Fetch](https://github.com/node-fetch) for [node-fetch](https://github.com/node-fetch/node-fetch).