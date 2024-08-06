const { Client, GatewayIntentBits } = require('discord.js');

//a virtual client which can be used to interact with server
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });
//Client has Guilds Access and Guilds messages, which makes it can create, delete etc messages

//Creating interaction functions
client.on('interactionCreate', interaction => {
    //console.log(interaction);
    interaction.reply('Pong!')
})

client.on('messageCreate', (message) =>{
    if (message.author.bot) return
    message.reply({
        content: `Hi ${message.author.globalName}`
    })
});

client.login(TOKEN)