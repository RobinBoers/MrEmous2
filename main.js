// Import stuff
const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs');

// Init DB
const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const currency = new Discord.Collection();

// Import settings
const { prefix, token, nswfAllowed, coinEmoji, AdminRole } = require('./config.json');

Client.commands = new Discord.Collection();

// Currency system
Reflect.defineProperty(currency, 'add', {
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});
Reflect.defineProperty(currency, 'getBalance', {
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

Client.once('ready', async () => {

    // init currency db
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));

    // Get emojis
    coin = Client.emojis.cache.find(emoji => emoji.name === coinEmoji);

    // create currency embed, used later in commands
    currencyEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Currency')

    // debug message
    console.log("Mr. Emous is online");
 
});

// Get commands from files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    Client.commands.set(command.name, command)
}

Client.on('message', async message =>{
    if(message.author.bot) return;

    // You get money when sending messages
    currency.add(message.author.id, 1);

    // Make everything lowercase
    if(!message.content.toLowerCase().startsWith(prefix)) return;

    // Split the thing to get the command (string) and arguments (array)
    var args = message.content.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();

    // default commands
    if(command === 'ping') {

        console.log('mr. ping');
        Client.commands.get('ping').execute(message, args);

    } 
    else if (command === 'beep') {

        console.log('mr. boop');
        Client.commands.get('beep').execute(message, args);
        
    }
    else if(command === 'help') {

        console.log('mr. help');
        Client.commands.get('help').execute(message, args);

    }
    
    // memes
    else if(command === 'memes' || command === "m") {

        console.log('mr. gaMEMEneer');
        Client.commands.get('memes').execute(message, args);

    }  

    // nsfw commands - we first detect if the command is nsfw
    else if(command === 'boobs' || command === 'boobies' || command === 'boob' || command === 'penislength' || command === 'penis' || command === 'pipi' || command === 'porn' || command === 'porno' || command === 'sex') {
        if(nswfAllowed == true) {

            // if it is, check which command was used
            if(command === 'boobs' || command === 'boobies' || command === 'boob') {
    
                console.log('mr. boobs');
                Client.commands.get('boobs').execute(message, args);
    
            } else if(command === 'penislength') {
    
                console.log('mr. penis');
                Client.commands.get('penislength').execute(message, args);
    
            } else if(command === 'penis' || command === 'pipi') {
    
                console.log('mr. penis');
                Client.commands.get('penis').execute(message, args);
    
            } else if(command === 'porn' || command === 'porno' || command === 'sex') {
    
                console.log('porno star');
                Client.commands.get('porn').execute(message, args);
    
            } 
    
        } else {
    
            message.channel.send('nsfw not allowed'); 
    
        }
    }
    
    // Fun commands
    else if(command === 'gay') {

        console.log('mr. gay');
        Client.commands.get('gay').execute(message, args);

    } 
    else if(command === 'lauw' || command === 'howlauw') {

        console.log('lauwrate?');
        Client.commands.get('lauw').execute(message, args);

    } 
    else if(command === 'howgay') {

        console.log('100% gay');
        Client.commands.get('howgay').execute(message, args);

    } 
    else if(command === 'rick' || command === 'rickroll') {

        console.log('yee, rickrolling someone');

        const target = message.author;
        const user = await Users.findOne({ where: { user_id: target.id } });
        const item = await user.getItems('rickroll');
        const shopItem = await CurrencyShop.findOne({ where: { name: { [Op.like]: 'rickroll' } } });

        console.log(item);

        if(item[0].dataValues.amount) {

            Client.commands.get('rick').execute(message, args);
            await user.addItem(shopItem,-1);

        } else {

            message.channel.send('you dont have rickroll token');

        }

    }
    else if(command === 'vip') {

        console.log('owo, someoen is getting VIPPPP');

        const target = message.author;
        const user = await Users.findOne({ where: { user_id: target.id } });
        const item = await user.getItems('vip');
        const shopItem = await CurrencyShop.findOne({ where: { name: { [Op.like]: 'vip' } } });

        console.log(item);

        if(item[0].dataValues.amount) {

            await user.addItem(shopItem,-1);

            var role = message.guild.roles.cache.find(role => role.name === "VIP");
            message.member.roles.add(role);

            message.channel.send('youve got vip rank for 2 hours now. enjoy!');

        } else {

            message.channel.send('you dont have vip token');

        }

    }
    else if(command === 'say') {

        console.log('mr. says');
        Client.commands.get('say').execute(message, args);

    }
    else if(command === 'spoiler') {

        console.log('mr. spoilers');
        Client.commands.get('spoiler').execute(message, args);

    }
    else if(command === 'avatar') {
        // Send the user's avatar URL
        message.channel.send(message.author.avatarURL());
    }



    // Utility commands
    else if(command === 'clear') {

        console.log('mr. clear');
        Client.commands.get('clear').execute(message, args);

    }
    else if(command === 'masterclear') {

        console.log('masterclear');
        Client.commands.get('masterclear').execute(message, args);

    }
    else if(command === 'study') {

        console.log('studybol');
        Client.commands.get('study').execute(message, args);

    }
    else if(command === 'test') {

        console.log('testing');
        Client.commands.get('test').execute(message, args);

    }

    // conf commands
    else if(command === 'prefix') {

        message.channel.send('currently disabled, wasnt working');

        // if(args[0]) {
        //     prefix = args[0];
        // } else {
        //     message.channel.send('pls enter valid prefix');
        // }

    }    
    // conf commands
    else if(command === 'nsfwallowed') {

        // message.channel.send('currently disabled, wasn\'t working');
        if(message.member.roles.cache.some(role => role.name === AdminRole)){

            if(nswfAllowed == true) {

                nswfAllowed = false;
                message.channel.send("nsfw not allowed anymore");

            } else if(nswfAllowed == false) {

                nswfAllowed = true;
                message.channel.send("nsfw allowed now");

            } else {
                message.channel.send('whoops, something went wrong');
            }
        
        } else { message.channel.send('you dont have premission to do this'); }

    } 

    // account balance commands
    else if (command === 'balance' || command === 'bal') {

        const target = message.mentions.users.first() || message.author;
        currencyEmbed.setTitle(``);
        currencyEmbed.setDescription(`${target.username} has ${currency.getBalance(target.id)}${coin}`);
        return message.channel.send(currencyEmbed);

    } 
    else if (command === 'inventory' || command === 'inv') {

        const target = message.mentions.users.first() || message.author;
        const user = await Users.findOne({ where: { user_id: target.id } });
        const items = await user.getItems();

        if (!items.length) {
            currencyEmbed.setTitle(``);
            currencyEmbed.setDescription(`${target.username} has nothing!`);
            return message.channel.send(currencyEmbed);
        } 

        currencyEmbed.setTitle(`${target.username}'s Inventory`);
        currencyEmbed.setDescription(`${target.username} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
        return message.channel.send(currencyEmbed);
        
    } 
    else if (command === 'transfer' || command === 'pay') {

        if(args[0]) {

            const currentAmount = currency.getBalance(message.author.id);
            const transferAmount = args[0];
            const transferTarget = message.mentions.users.first();

            if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`srry ${message.author}, invalid amount.`);
            if (transferAmount > currentAmount) return message.channel.send(`ssry ${message.author}, you have only ${currentAmount}${coin}`);
            if (transferAmount <= 0) return message.channel.send(`please enter an amount greater than zero, ${message.author}.`);

            currency.add(message.author.id, -transferAmount);
            currency.add(transferTarget.id, transferAmount);

            return message.channel.send(`transferred ${transferAmount}${coin} to ${transferTarget.username}. your balance is ${currency.getBalance(message.author.id)}${coin}`);

        } else {

            message.channel.send('pls use good syntax');

        }
        
    } 
    else if (command === 'rob' || command === 'steal') {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        var getPer = getRandomInt(101) / 100;
        var caughtPer = getRandomInt(101);

        const transferTarget = message.mentions.users.first();
        const currenAmount = currency.getBalance(message.author.id);
        const currentAmountTarget = currency.getBalance(transferTarget.id);
        const transferAmount = currentAmountTarget * getPer;

        function caught() {
            if(currenAmount > 20) {
                currency.add(message.author.id, -20);
            }
            else {
                currency.add(message.author.id, -currenAmount);
            }
            message.channel.send(`Caught!`);
        }

        if (currenAmount < 51) return message.channel.send(`you need at least 50 to rob someone`);
        if (currentAmountTarget < 51) return message.channel.send(`${transferTarget.username} doesnt even have more than 20${coin}. not worth it`);
        if (!transferAmount || isNaN(transferAmount)) return caught(); 
        if (transferAmount <= 0) return caught();
        if (caughtPer > 50) return caught(); 

        currency.add(transferTarget.id, -transferAmount);
        currency.add(message.author.id, transferAmount);

        message.channel.send(`youve stolen ${transferAmount}${coin} from ${transferTarget.username}. your balance is ${currency.getBalance(message.author.id)}${coin} now`);
    } 
    else if (command === 'buy') {

        if(args[0]) {
            const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: args } } });
            if (!item) return message.channel.send(`thats a weird item`);
            if (item.cost > currency.getBalance(message.author.id)) {
                return message.channel.send(`you only have ${currency.getBalance(message.author.id)}${coin}, but ${item.name} costs ${item.cost}${coin}!`);
            }

            const user = await Users.findOne({ where: { user_id: message.author.id } });
            currency.add(message.author.id, -item.cost);
            await user.addItem(item,1);

            message.channel.send(`you've bought: ${item.name}.`);

            
        } else {

            message.channel.send(`pls specify item`);

        }
        
    } 
    else if (command === 'shop') {

        const items = await CurrencyShop.findAll();
        const shopItems = items.map(item => `**${item.name}**: ${item.cost} ${coin}`).join('\n');
        const helpText = "\n\nfor more info, type: mr help shop";

        currencyEmbed.setTitle(`💰 Koter Shop`);
        currencyEmbed.setDescription(shopItems+helpText, { code: true });
        return message.channel.send(currencyEmbed); 
        
    } 
    else if (command === 'leaderboard' || command === 'rich') {

        currencyEmbed.setTitle(`Leaderboard`);
        currencyEmbed.setDescription(
            currency.sort((a, b) => b.balance - a.balance)
                .filter(user => Client.users.cache.has(user.user_id))
                .first(10)
                .map((user, position) => `(${position + 1}) ${(Client.users.cache.get(user.user_id).username)}: ${user.balance}${coin}`)
                .join('\n')//,
            // { code: true }
        );

        return message.channel.send(currencyEmbed);   
        
	}
    
    else {
        message.channel.send('thats weird');
        console.log(args);
    }
});

Client.login(token);