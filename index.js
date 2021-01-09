import Discord from 'discord.js';
import dotenv from 'dotenv';
import weather from './weather.js';
dotenv.config()

const token = process.env.TOKEN;
const client = new Discord.Client();

client.on('ready', guild => {
    console.log(`Logged into ${client.user.tag}`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(token);