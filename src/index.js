require("dotenv").config();
// destructuring
const { Client, IntentsBitField, Interaction, ChatInputCommandInteraction } = require("discord.js");

// alt + 96 to create backticks
//https://dictionaryapi.dev/

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) =>{
  console.log(`${c.user.username} is online!`);
})

client.on(`messageCreate`, (msg) =>{
  // console.log(msg.content);

  if(msg.author.bot){
    return;
  }

  if (msg.content === "Sukuna"){
    msg.reply("Este esta re picado");
  }
});


client.on(`interactionCreate`, (interaction) =>{
 
if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "hey"){
    interaction.reply("Que onda mugre?")
  }
});

client.login(process.env.TOKEN);