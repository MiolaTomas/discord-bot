require("dotenv").config();
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

const commands = [
  {
    name: "hey",
    description: "This command says hey!"
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering global slash commands...");

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log("Global slash commands registered!");
  } catch (error) {
    console.error(`There was an error: ${error.message}`);
  }
})();
