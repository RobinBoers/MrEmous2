module.exports = {
    name: 'ping',
    description: "check if bot is online",
    execute(message, args){

        message.channel.send('pong!');
        
    }
}