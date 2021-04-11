const Discord = require('discord.js');
const getColor = require('./colors');


module.exports = {

  embed(title, text, user = 'a user', imageUrl = ''){
    return {
      color: getColor.getColor(),
      title,
      description: text,
      footer: {
        text: `Requested by ${user.username} #${user.discriminator}`,
        icon_url: user.avatarURL({ dynamic: true })
      },
      image: {
        url: imageUrl
      }
    };
  }

};
