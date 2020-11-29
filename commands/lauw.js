module.exports = {
    name: 'lauw',
    description: "lauwrate",
    execute(message, args){

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var lauwPer = getRandomInt(101);
        var lauwAsker = message.author.username;

        if(args[0]) {
            console.log(args[0]);
            lauwAsker = args[0];
        }
        
        message.channel.send(lauwAsker+' is '+lauwPer+'% lauw.');
        
    }
}