const { Collection } = require("discord.js");

module.exports = {
    name: 'masterclear',
    description: "clears bot channel",
    execute(message, args){

        const { prefix, token, nswfAllowed, coinEmoji, AdminRole } = require('../config.json');

        if(!message.guild === null) {
            if(message.member.roles.cache.some(role => role.name === AdminRole)){

                if(args[0] == "confirm") {
                    message.channel.messages.fetch().then(async messages => {
                        console.log(`${messages.size} messages.`);
                    
                        let finalArray = [];
                    
                        const putInArray = async (data) => finalArray.push(data);
                    
                        // for (const message of messages.array().reverse()) await putInArray(message); 
                        for (const message of messages.array().reverse()) {
                            if(!message.pinned) {
                                await putInArray(message); 
                            }
                        } 
                    
                        // console.log(finalArray);
                        console.log(finalArray.length);
            
                        message.channel.bulkDelete(finalArray);
            
            
                    
                    });
                }

                else {
                    message.channel.send('Are you sure?');
                    message.channel.send('Type ```mr masterclear confirm``` to confirm');
                }

                console.log(args);
            } else { message.channel.send('You dont have premission to do this'); }
        } else { message.channel.send('This command only works on servers'); }  
    }
}