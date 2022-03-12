exports.EasyClient = async function({defaultCooldown = '', prefix = '', devServerID = '', token = ''}) {
  const axios = require('axios')
  const EasyUpdater = await axios.get('https://registry.npmjs.org/dis-easystart')
  const stableVersion = EasyUpdater.data['dist-tags'].latest
  const version = require('./package.json').version
  if (stableVersion !== version && !version.includes('dev')) {
    console.log('\x1b[93m[EasyStart Updater]\x1b[31m Please update EasyStart\x1b[33m https://www.npmjs.com/package/dis-easystart\x1b[0m')
  } else if (version.includes('dev')) {
    console.log('\x1b[93m[EasyStart Updater]\x1b[31m You are using\x1b[33m DEV\x1b[31m version\x1b[0m')
  } else {
    console.log('\x1b[93m', '[EasyStart Updater]', '\x1b[32m', 'You are using latest version!', '\x1b[0m')
  }
  const { GClient, Plugins, Command, Component } = require('gcommands');
  const { Intents } = require('discord.js');
  const { join } = require('path');
  
  // Set the default cooldown for commands
  Command.setDefaults({
    cooldown: defaultCooldown,
  });
  
  // Set the default onError function for components
  Component.setDefaults({
    onError: (ctx, error) => {
      return ctx.reply('Oops! Something went wrong')
    } 
  });
  
  
  // Search for plugins in node_modules (folder names starting with gcommands-plugin-) or plugins folder
  Plugins.search(__dirname);
  
  const client = new GClient({
    // Register the directories where your commands/components/listeners will be located.
    dirs: [
      join(__dirname, 'commands'),
      join(__dirname, 'components'),
      join(__dirname, 'listeners')
    ],
    // Set the prefix for message commands
    messagePrefix: prefix,
    // Set the guild where you will be developing your bot. This is usefull cause guild slash commands update instantly.
    devGuildId: devServerID,
    // Set the intents you will be using (https://discordjs.guide/popular-topics/intents.html#gateway-intents)
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });
  
  // Login to the discord API
  client.login(token);
}


// options: prefix_type, prefix, database, token, defaultCooldown, language