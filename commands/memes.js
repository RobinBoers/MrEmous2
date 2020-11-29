module.exports = {
    name: 'memes',
    description: "memes",
    execute(message, args){

        const { prefix, token, nswfAllowed, coinEmoji, AdminRole, redditToken } = require('../config.json');

        var snoowrap = require('snoowrap');
        const r = new snoowrap({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0',
            clientId: 'wxF4146B4858Sg',
            clientSecret: redditToken,
            username: 'Sea-Box5852',
            password: 'Sea-Box5852'
        });

        function meme(sr) {
            post = r.getRandomSubmission(sr).then((post) => {
                var link = post.url;

                // console.log(post);
                // console.log(link)
                message.channel.send(link);
            });
        }

        if(args == "trump") {
            var sr = 'presidentialRaceMemes';
            meme(sr);
        }

        else if(args == "gaming") {
            var sr = 'gamingmemes'; 
            meme(sr);
        }

        else if(args == "corona") {
            var sr = 'CoronavirusMemes';
            meme(sr); 
        }

        else if(args[0] == 'minecraft' || args[0] == "mc") {
            var sr = 'MinecraftMemes'; 
            meme(sr);
        } 

        else if(args[0] == 'coding') {
            var sr = 'ProgrammerHumor'; 
            meme(sr);
        }

        else if(args[0] == 'shrek') {
            var sr = 'Shrekmemes'; 
            meme(sr);
        }

        else if(args[0] == 'music') {
            var sr = 'musicmemes'; 
            meme(sr);
        }

        else if(args[0] == 'hermitcraft' || args[0] == 'hc' || args[0] == 'hermits' || args[0] == 'hermit') {
            var sr = 'hermitcraftmemes'; 
            meme(sr);
        }

        else if(args[0] == 'other') {
            var sr = 'memes'; 
            meme(sr);
        }

        else {
            message.channel.send('pls use an arg');
            message.channel.send('args are:');
            message.channel.send("```trump, gaming, corona, minecraft, coding, shrek, music, hermitcraft, other```");
        }

    }
}