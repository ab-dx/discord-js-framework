const Discord = require('discord.js');

module.exports = {

  embed(title, text, user = 'a user', imageUrl = ''){
    return {
      color: '#81a1c1',
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
