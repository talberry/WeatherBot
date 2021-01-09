import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
import {getTemp, getWeather} from './weather.js';
import log from './logging.js';

const token = process.env.TOKEN;
const client = new Discord.Client();
const prefix = '!';

client.on('ready', (guild) => {
    console.log(`Logged into ${client.user.tag}`);
});

client.on('message', (msg) => {
    const query = msg.content.includes(' ')
        ? msg.content.substr(prefix.length).split(' ')
        : Array(msg.content.substr(prefix.length));

    if (msg.content.substr(0, prefix.length) !== prefix) return;

    log(msg);

    console.log(getWeather(query[1], query[2]));

    switch (query[0]) {
        case 'ping':
            msg.reply('pong');
            break;
        case 'weather':
            msg.reply(getWeather(query[1], query[2]));
            break;
        case 'temp':
            msg.reply;
            break;
    }
});

client.login(token);
