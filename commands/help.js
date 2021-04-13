const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//const folders = fs.readdirSync('./commands', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
const { embed } = require('../templates/completeEmbed');

module.exports = {

  name: 'help',
  description: 'Display the help menu',
  category: 'Misc',
  execute(message, args){
    let desc = "";
    let cmds = [];
    let categories = [];
    for (const file of commandFiles) {
    	const command = require(`./${file}`);
      cmds.push({
                  category: command.category,
                  name: command.name,
                  desc: command.description 
                });
      if(!categories.includes(command.category)){
        categories.push(command.category);
      }
    }
    categories.forEach(c => {
      desc += `**${c}**\n`;
      cmds.forEach(cmd => {
        if(cmd.category == c){
          desc += `**\`${cmd.name}\`** - ${cmd.desc} \n`;
        }
      });
      desc += '\n';
    });
    message.channel.send({ embed: embed('Help Menu', desc, message.author) });
  }

};
