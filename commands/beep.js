module.exports = {
    name: 'beep',
    description: "check if bot is online",
    execute(message, args){

        message.channel.send('Boop!');
        
    }
}