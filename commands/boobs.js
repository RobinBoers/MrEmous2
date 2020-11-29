module.exports = {
    name: 'boobs',
    description: "nsfw content",
    execute(message, args){
        if (message.channel.nsfw) {
        
            var snoowrap = require('snoowrap');
            const r = new snoowrap({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:82.0) Gecko/20100101 Firefox/82.0',
                clientId: 'wxF4146B4858Sg',
                clientSecret: redditToken,
                username: 'Sea-Box5852',
                password: 'Sea-Box5852'
            });

            const subreddit = 'boobsandtities'; // boobs subreddit here

            post = r.getRandomSubmission(subreddit).then((post) => {
                var link = post.url;

                // console.log(link);
                message.channel.send("here, have some boobs");
                message.channel.send(link);
            });
        } else {
            message.channel.send("srry not nsfw");
        }
        
    }
}