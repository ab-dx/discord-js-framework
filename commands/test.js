const completeEmbed = require('../templates/completeEmbed').embed;

module.exports = {
  
  name: 'test',
  description: 'Testing the bot',
  execute(message, args){
    message.channel.send({ embed: completeEmbed('Testing', '**Test Successful**', message.author) });
  }

};
