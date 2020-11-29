module.exports = {
    name: 'howgay',
    description: "gay meter",
    execute(message, args){

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var gayPer = getRandomInt(101);
        var gayAsker = message.author.username;

        if(args[0]) {
            console.log(args[0]);
            gayAsker = args[0];
        }
        
        message.channel.send(gayAsker+' is '+gayPer+'% gay.');
        
        
    }
}