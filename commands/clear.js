const { Collection } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "clears bot channel",
    execute(message, args){

        const { prefix, token, nswfAllowed, coinEmoji, AdminRole } = require('./config.json');

        if(!message.guild === null) {
            if(message.member.roles.cache.some(role => role.name === AdminRole)){

                const { prefix, token, nswfAllowed, coinEmoji } = require('./config.json');

                message.channel.messages.fetch().then(async messages => {
                    console.log(`${messages.size} messages.`);
                
                    let finalArray = [];
                
                    const putInArray = async (data) => finalArray.push(data);
                
                    // for (const message of messages.array().reverse()) await putInArray(message); 
                    for (const message of messages.array().reverse()) {
                        if(!message.pinned && message.author.username === "MrEmous") {
                            await putInArray(message); 
                        }
                        if(!message.pinned && message.content.toLowerCase().includes(prefix)) {
                            await putInArray(message); 
                        }
                    } 
                
                    // console.log(finalArray);
                    console.log(finalArray.length);

                    message.channel.bulkDelete(finalArray);


                
                });
            } else { message.channel.send('You dont have premission to do this'); }
        } else { message.channel.send('This command only works on servers'); }  
    }
}