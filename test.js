//reply message listeners
client.on('message', message =>{
    if(message.content.includes('true')){
        const LULW = new Discord.MessageAttachment('./emotes/LULW.png');
        message.channel.send('ANY TRUERS? ');
        message.channel.send(LULW);
    }

    if(message.content.includes('league')){
        message.channel.send('league is a dogshit game run by a dogshit company');
    }

    if(message.content.includes('minecraft')){
        message.channel.send('creeper. awwwwwww man');
    }
})

//commands
client.on('message', message =>{
    const args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'ping':
            var ping = client.ws.ping;
            message.channel.send("Kadeem's ping is `" + `${ping}` + " ms`");
        break;

        case 'website':
            message.channel.send('pornhub.com');
        break;

        case 'rank':
            var lp = Math.floor((Math.random() * 100) + 1);
            message.channel.send('Iron IV ' + lp + 'lp');
        break;

        case 'info':
            if(args[1] === 'version'){
                message.channel.send('The bot is on Version ' + version);
            }
            else{
                message.channel.send('Invalid Arguments');
            }
        break;

        case 'clear':
            if(!args[1]){
                return message.reply('Please define how many messages you\'d like to delete');

            }
            message.channel.bulkDelete(args[1]);
        break;
    }
})