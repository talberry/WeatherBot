import {Clock} from 'global-clock';

export default function (msg) {
    console.log();
    console.log(`${Clock.getDate()} ${Clock.getTime()}`);
    console.log(`Channel: ${msg.channel.name}`);
    console.log(`${msg.author.username}: ${msg.content}`);
}
