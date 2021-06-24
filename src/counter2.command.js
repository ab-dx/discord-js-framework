const { embed } = require('../templates/completeEmbed');
const counter = require('./counter.service');

module.exports = {
  
  name: 'counter2',
  description: 'Increment a counter (second instance)',
  category: 'Misc',
  execute(message, args){
    counter.increment();
    message.channel.send({ embed: embed('Count 2', 'The count is: ' + counter.count, message.author) });
  }

};
