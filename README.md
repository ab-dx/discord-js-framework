# discord-js-framework

## Introduction

 A simple discord.js boiler-plate to help bot developers code faster.

## Installation

* Clone the repo:
```
git clone https://github.com/ParallaxWave/discord-js-framework
```
* Using degit:
```
npx degit https://github.com/ParallaxWave/discord-js-framework
```
After cloning, run `npm install` or `yarn install`

## Code Samples

 Edit ``config.json`` as per your needs

 ```json
{
  "prefix": "+",
  "token": "your token"
}
 ```

 Create a new file in the commands folder:
```js
//yourCommand.js
module.exports = {
    name: 'yourCommandName',
    description: 'Command Description',
    category: 'Category for help menu',
    execute(message, args){
      //Your Code here
      message.channel.send('Hi!');
    }    
};
```

 Using the embed system:
```js
//yourCommand.js
const { embed } = require('../templates/completeEmbed'); 
//Embeds available: completeEmbed, standardEmbed, titleEmbed
module.exports = {
    name: 'yourCommandName',
    description: 'Command Description',
    category: 'Category for help menu',
    execute(message, args){
      //Your Code here
      message.channel.send({ embed: embed('Title', 'Description', message.author) });
    }    
};
```

> * completeEmbed Syntax:
```js
message.channel.send({ embed: embed('Title', 'Description', message.author, 'image_url') });
```

> * standardEmbed Syntax:
```js
message.channel.send({ embed: embed('Title') });
```

> * titleEmbed Syntax:
```js
message.channel.send({ embed: embed('Title', 'Description') });
```

Adding aliases to ``templates/alias.js``

```js
//edit templates/alias.js
module.exports = {
  alias: [
    { index: ['h', 'help'], command: "help" },
    { index: ['t', 'test'], command: "test" },
    { index: ['m', 'meme'], command: "meme" }
  ]
};

```

## Running the bot

 Run `npm start` to run the bot.


