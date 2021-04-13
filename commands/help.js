const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { embed } = require('../templates/completeEmbed');

module.exports = {

  name: 'help',
  description: 'Display the help menu',
  execute(message, args){
    let desc = "";
    for (const file of commandFiles) {
    	const command = require(`./${file}`);
      desc += `**\`${command.name}\`** - ${command.description}\n`;

    }
    message.channel.send({ embed: embed('Help Menu', desc, message.author) });
  }

};
