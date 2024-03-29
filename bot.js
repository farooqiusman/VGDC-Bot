require("dotenv").config();
const {Client, Intents} = require("discord.js")

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
    ],
});
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)})
    const guildId = '880214036917153843'
    const guild = client.guilds.cache.get(guildId)
    let commands
    
    if(guild){
        commands = guild.commands
    }else{
        commands = client.application?.commands
    }
    
    commands?.create({
        name: 'ping',
        description: 'Replies with pong',
    })

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()){
        return
    }

    const {commandName, options} = interaction
    
    if(commandName == 'ping'){
        interaction.reply({
        content: 'pong',
        })
    }
})
// Hello
client.login(process.env.DISCORD_TOKEN)

