import {MessageEmbed} from 'discord.js';
import fetch from 'node-fetch';

const key = '2752b085bb24306e72dbf85b73701144';

async function getTemp(location, units, msg, Discord) {
    const defaultCity = 'London';
    const defaultUnit = 'metric';
    const city = location;

    if (location === undefined) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=${defaultUnit}&appid=${key}`
            );
            const data = await response.json();

            data.main.temp = Math.round(data.main.temp);

            const embed = new Discord.MessageEmbed();
            embed.setColor('#7289DA');
            embed.setTitle('Weather');
            embed.setDescription(
                `Current temperature in ${defaultCity}: ${data.main.temp}C°`
            );

            msg.channel.send(embed);
        } catch (err) {
            console.log(err);
            msg.channel.send(
                'An error has occured, please check spelling and use "!help" for any further assistance'
            );
        }
    } else {
        if (units == null) {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${defaultUnit}&appid=${key}`
                );
                const data = await response.json();

                data.main.temp = Math.round(data.main.temp);

                const embed = new Discord.MessageEmbed();
                embed.setColor('#7289DA');
                embed.setTitle('Weather');
                embed.setDescription(
                    `Current temperature in ${city}: ${data.main.temp}C°`
                );

                msg.channel.send(embed);
            } catch (err) {
                console.log(err);
                msg.channel.send(
                    'An error has occured, please check spelling and use "!help" for any further assistance'
                );
            }
        } else {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`
                );
                const data = await response.json();

                let suffix;
                if (units === 'metric') {
                    suffix = 'C°';
                } else {
                    suffix = 'F°';
                }

                data.main.temp = Math.round(data.main.temp);

                const embed = new Discord.MessageEmbed();
                embed.setColor('#7289DA');
                embed.setTitle('Weather');
                embed.setDescription(
                    `Current temperature in ${city}: ${data.main.temp}${suffix}`
                );

                msg.channel.send(embed);
            } catch (err) {
                console.log(err);
                msg.channel.send(
                    'An error has occured, please check spelling and use "!help" for any further assistance'
                );
            }
        }
    }
}

export {getTemp};
