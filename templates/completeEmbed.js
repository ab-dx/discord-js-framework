const Discord = require('discord.js');
const getColor = require('./colors');


module.exports = {

  embed(title, text, user = 'a user', imageUrl = '', footer = ''){
    return {
      color: getColor.getColor(),
      title,
      description: text,
      author: {
        name: `Requested by ${user.username} #${user.discriminator}`,
        icon_url: user.avatarURL({ dynamic: true })
      },
      footer: {
        text: footer
      },
      timestamp: new Date(),
      image: {
        url: imageUrl
      }
    };
  }

};
