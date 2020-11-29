module.exports = {
    name: 'test',
    description: "testing",
    execute(message, args){

        const { prefix, token, nswfAllowed, coinEmoji, AdminRole } = require('./config.json');

        // var msg = message.channel.messages.fetch("759423335166640128");
        // console.log(msg);
        // msg.react('✅');


        // if(message.member.roles.cache.some(role => role.name === AdminRole)){

        //     message.channel.send('You have role');

        // }
        // else {

        //     message.channel.send('You dont have role');

        // }
        
    }
}