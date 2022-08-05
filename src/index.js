import { config } from "dotenv";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

config();
const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: "10" }).setToken(TOKEN);

const quotes = [
  `"Je maakt me geil maar je laat me niet komen." - Ying`,
  `"Zobiezo" - Ying`,
  `"Paneer me schatje." - Marijn`,
  `"92, beste bouwjaar." - Martijn`,
  `"Het liefst slaap ik voor eeuwig."  - Sonny`,
  `"Ik voelde me gister niet zo lekker dus toen nam ik maccie."  - Ying`,
  `"Wodihh mattie dat is kaolo ver." - Ying`,
  `"Hoeren!!" - Kara`,
  `"Hoe dieper de neus hoe beter de sniff." - Ying`,
  `"Om mijzelf te dwingen meer geld te verdienen, besloot ik meer uit te geven." - Ying`,
];

const random = (max) => Math.floor(Math.random() * max);

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    interaction.reply({ content: `${quotes[random(quotes.length)]}` });
  }
});

async function main() {
  const commands = [
    {
      name: "quote",
      description: "Get a random FFM quote",
    },
  ];

  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
