const Discord = require('discord.js');

module.exports = {

  embed(title, text){
    return {
      color: '#81a1c1',
      title,
      description: text
    };
  }

};
