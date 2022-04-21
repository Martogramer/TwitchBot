const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    identity: {
        username: 'Martogramer',
        password: 'oauth:3l3lgzakrb2rj9c1v6d2cwb7q6rq4l'
    },
    channels: ['martogramer']
}

const client = new tmi.client(options)

client.connect();

client.on('connected', (address, port) => {
    client.action('martogramer', `Hola! estas conectado ${address}:${port}`)
})
client.on('chat', (target, ctx, message, self) => {
    if (self) return;

    console.log(target);
    console.log(ctx)

    const commandName = message.trim();
    if(commandName === 'hello'){
        client.say(target, `Welcome ${ctx.username}`)
    }
    const bienvenida = message.trim();
    if(bienvenida === 'gracias'){
        client.say(target, `Gusto de tenerte ${ctx.username}, espero disfrutes el streaming`)
    }
    const adios = message.trim();
    if(adios === 'chau'){
        client.say(target, `Hasta la vista ${ctx.username}!`)
    }



})