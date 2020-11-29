module.exports = {
    name: 'say',
    description: "make mr emous say stuff",
    execute(message, args){

        if(args == "") {
            message.channel.send('wot? type:');
            message.channel.send("```mr say ***what you want me to say***```");
        } else {
            // message.channel.send(args);
            // message.channel.send(message.author.username+' says: '+args);
            message.channel.send(args+"\n -"+message.author.username);
        }
        
    }

}