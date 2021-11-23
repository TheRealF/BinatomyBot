const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require("./config.json");

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
}];

const rest = new REST({ version: '9' }).setToken("OTEyNzI2MTUwMTYwMjExOTk4.YZ0Idw.TO8YIv5eirkvrp4QU3Yfi4hEBnc");

(async () => {
  try {
    console.log('BOT START\n\nStarted refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands("912726150160211998", "707539549466787840"),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,  Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`I am Biny, hello!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login("OTEyNzI2MTUwMTYwMjExOTk4.YZ0Idw.TO8YIv5eirkvrp4QU3Yfi4hEBnc");
