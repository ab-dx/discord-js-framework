const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const status = require('./templates/status.js').status;
const client = new Discord.Client();

//Set Status
const setStatus = () => {
  const options = status(prefix, client);
  const random = Math.floor(Math.random() * options.length);
  client.user.setPresence(options[random]);
};

client.once('ready', () => {
  setInterval(setStatus, 3000);
});



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;
  try {
  	client.commands.get(command).execute(message, args);
  } catch (error) {
  	console.error(error);
  	message.reply('There was an error trying to execute that command!');
  }
  
});


client.login(token);
