module.exports = {
    name: 'study',
    description: "overhoorbot",
    execute(message, args){

        if(args[0] == "fr" || args[0] == "french" || args[0] == "frans" || args[0] == "france") {

            if(args[1] == "avoir") {
                message.channel.send("```J'ai\nTu as\nIl a\nElle a\nOn a\nNous avons\nVous avez\nIls ont\nElles ont```");
            }
    
            else if(args[1] == "etre") {
                message.channel.send("```Je suis\nTu es\nIl est\nElle est\nOn est\nNous sommes\nVous êtes\nIls sont\nElles sont```");
            } 

            else if(args[1] == "numbers") {
                message.channel.send("coming soon");
            } 

            else {
                message.channel.send("Pls choose a subject:");
                message.channel.send("```etre, avoir, numbers,```");
            }

        }

        else {
            message.channel.send('pls choose subject:');
            message.channel.send("```fr```");
            console.log(args);
        }
        
    }
}