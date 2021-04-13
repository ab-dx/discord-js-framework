const { embed } = require('../templates/completeEmbed');

module.exports = {
  
  name: 'test',
  description: 'Testing the bot',
  category: 'Misc',
  execute(message, args){
    message.channel.send({ embed: embed('Testing', '**Test Successful**', message.author) });
  }

};
