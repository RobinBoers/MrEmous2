module.exports = {
    name: 'penislength',
    description: "check for nsfw channel",
    execute(message, args){

        var random = Math.floor(Math.random() * Math.floor(8));
        var i;
        var finalMessage = "8=";
        var PiPi = "";

        console.log(random);

        function calculateLength() {
            while (i < random) {
                PiPi = PiPi+"=";
                console.log(PiPi);
            }
            return PiPi;
        }

        finalPiPi = calculateLength();
        console.log(finalPiPi);

        finalMessage = finalMessage+finalPiPi+"D";
        message.channel.send(finalMessage);
        
    }
}