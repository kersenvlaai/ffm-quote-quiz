import { config } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const TOKEN = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log("Ready!");
});

client.login(TOKEN);

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("messageCreate", (message) => {
  console.log(`${message.author.tag}: ${message.content}`);
});
