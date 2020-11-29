module.exports = {
    name: 'help',
    description: "get help with the fallenworld server concept",
    execute(message, args){

        const Discord = require('discord.js');
        const Client = new Discord.Client();
        const fs = require('fs');

        coin = Client.emojis.cache.find(emoji => emoji.name === "mrcoin");

        var helpEmbed = new Discord.MessageEmbed()
	    .setColor('#d6320d')
        .setTitle('Help menu')
        .setDescription('Choose a catogory to see available commands.')
        .addFields(
            { name: '🍆 NSFW', value: '```mr help nsfw```', inline: true },
            { name: '💰 Money', value: '```mr help money```', inline: true },
            { name: '🪀 Fun', value: '```mr help fun```', inline: true },
        )
        .addFields(
            { name: '🛠️ Utility', value: '```mr help utility```', inline: true },
            { name: '⚙️ Config', value: '```mr help config```', inline: true },
            { name: '🤣 Memes', value: '```mr help memes```', inline: true },
        )

        var subHelpEmbed = new Discord.MessageEmbed()
	    .setColor('#d6320d')
        .setTitle('Help menu')
        .setDescription('Whoops, something went wrong')

        var shopHelpEmbed = new Discord.MessageEmbed()
	    .setColor('#d6320d')
        .setTitle('💰 Koter Shop')
        .addFields(
            { name: 'Rickroll', value: '```this token can be used to rickroll someone with: mr rick```' },
            { name: 'VIP', value: '```this token can be used to get the vip role. the VIP role gives you the ability to use external emojis, get priority speaker, and see the server insides. it also gives you premission to mute, move and deafen others.```' },
            { name: 'Koekjestoken', value: '```this token is just a placeholder```' },
        )

        var subShopHelpEmbed = new Discord.MessageEmbed()
	    .setColor('#d6320d')
        .setTitle('💰 VIP help')
        .addFields(
            { name: 'What does it do?', value: '```the VIP role gives you the ability to use external emojis, get priority speaker, and see the server insides. it also gives you premission to mute, move and deafen others. can be used with: mr vip```' }
        )

        if(args == "") {
            message.channel.send(helpEmbed);
        } 

        else if(args == "nsfw") {
            subHelpEmbed.setTitle('🍆 NSFW');
            subHelpEmbed.setDescription('```boobs, porn, penis, penislength```');
            message.channel.send(subHelpEmbed);
        }

        else if(args == "fun") {
            subHelpEmbed.setTitle('🪀 Fun');
            subHelpEmbed.setDescription('```gay, howgay, say, spoiler, lauw, rick, penislength, vip, avatar```');
            message.channel.send(subHelpEmbed);
        }

        else if(args == "utility") {
            subHelpEmbed.setTitle('🛠️ Utility');
            subHelpEmbed.setDescription('```clear, masterclear, study```');
            message.channel.send(subHelpEmbed);
        }

        else if(args == "memes") {
            subHelpEmbed.setTitle('🤣 Memes');
            subHelpEmbed.setDescription('```memes, rick```');
            message.channel.send(subHelpEmbed);
        }

        else if(args == "config") {
            subHelpEmbed.setTitle('⚙️ Config');
            subHelpEmbed.setDescription('```prefix, nsfwallowed```');
            message.channel.send(subHelpEmbed);
        }

        else if(args[0] == 'money') {
            subHelpEmbed.setTitle('💰 Money');
            subHelpEmbed.setDescription('```balance, inventory, transfer, shop, buy, leaderboard```');
            message.channel.send(subHelpEmbed);
        } 

        else if(args[0] == 'shop') {
            message.channel.send(shopHelpEmbed);
        } 

        else if(args[0] == 'vip') {
            message.channel.send(subShopHelpEmbed);
        } 

        else {
            message.channel.send('thats weird');
            // message.channel.send(args);
            console.log(args);
        }

        
        Client.login('Nzc0OTc0ODQxMjk5OTI3MTAx.X6flkA.64P1TBnQ-qgIeARIpGGGouYAHjU');
        
    }

}