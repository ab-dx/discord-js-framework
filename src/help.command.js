const fs = require('fs');
const commandFiles = fs.readdirSync('./src').filter(file => file.endsWith('.command.js'));
//const folders = fs.readdirSync('./commands', { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
const { embed } = require('../templates/completeEmbed');
const { prefix } = require('../config.json');
module.exports = {

  name: 'help',
  description: 'Display the help menu',
  category: 'Misc',
  execute(message, args){
    let done = false
    function helpList(){
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

    function helpCategory(){
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
        if(c.toLowerCase() == args[0].toLowerCase()){
          desc += `**${c}**\n\n`;
          cmds.forEach(cmd => {
            if(cmd.category == c){
              desc += `**\`${cmd.name}\`** - ${cmd.desc} \n`;
            }
          });
          desc += '\n';

        }
        else{
                  cmds.forEach(c => {
                    if(args[0].toLowerCase() == c.name.toLowerCase() && !done){
                      desc += "Command : **`"+prefix+c.name+"`**\n";        
                      desc += "Description: **`"+c.desc+"`**\n";        
                      done = true;
                    }
                  });
        }
      });
      message.channel.send({ embed: embed('Help Menu', desc, message.author) });
    }

    function helpGeneral(){
      let desc = "**Categories: **\n";
      let cmds = [];
      let categories = [];
      for (const file of commandFiles) {
      	const command = require(`./${file}`);
        cmds.push({
                    category: command.category,
                  });
        if(!categories.includes(command.category)){
          categories.push(command.category);
        }
      }
      categories.forEach(c => {
        desc += `**\`${c}\`**\n`;
      });
      message.channel.send({ embed: embed('Help Menu', desc, message.author, '') });
    }

    if(!args[0])
      helpGeneral();
    else if(args[0] == 'list')
      helpList();
    else
      helpCategory();
  }

};
