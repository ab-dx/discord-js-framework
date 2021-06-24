const { embed } = require('../templates/completeEmbed');
const counter = require('./counter.service');

module.exports = {
  
  name: 'counter',
  description: 'Increment a counter',
  category: 'Misc',
  execute(message, args){
    counter.increment();
    message.channel.send({ embed: embed('Count', 'The count is: ' + counter.count, message.author) });
  }

};
