module.exports = {
    name: 'rick',
    description: "sends rickroll",
    execute(message, args){

        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        
    }
}