const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
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
          desc += `**${c}**\n`;
          cmds.forEach(cmd => {
            if(cmd.category == c){
              desc += `**\`${cmd.name}\`** - ${cmd.desc} \n`;
            }
          });
          desc += '\n';
          desc += 'Run `'+prefix+'help <command>` for more help on a command';

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
      let desc = "**Categories: **\n\n";
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
      desc += '\nRun `'+prefix+'help <category>` for more help on a category';
      message.channel.send({ embed: embed('Help Menu', desc, message.author) });
    }

    if(!args[0])
      helpGeneral();
    else if(args[0] == 'list')
      helpList();
    else
      helpCategory();
  }

};
