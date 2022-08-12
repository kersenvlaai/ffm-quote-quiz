import { config } from "dotenv";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

import {
  sonny,
  coen,
  luuk,
  marijn,
  martijn,
  lieke,
  kara,
  ying,
  jeroen,
  leander,
  tom,
} from "../constants/quotes.js";
import { commands } from "../constants/commands.js";

config();
const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

let inputName;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({ version: "10" }).setToken(TOKEN);

const random = (max) => Math.floor(Math.random() * max);

const capFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    inputName = interaction.options.get("name").value.toLowerCase();
    switch (inputName) {
      case (inputName = "coen"):
        interaction.reply({
          content: `"${coen[random(coen.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "ian"):
        interaction.reply({
          content: `"${ian[random(ian.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "jeroen"):
        interaction.reply({
          content: `"${jeroen[random(jeroen.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "kara"):
        interaction.reply({
          content: `"${kara[random(kara.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "leander"):
        interaction.reply({
          content: `"${leander[random(leander.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "lieke"):
        interaction.reply({
          content: `"${lieke[random(lieke.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "luuk"):
        interaction.reply({
          content: `"${luuk[random(luuk.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "marijn"):
        interaction.reply({
          content: `"${marijn[random(marijn.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "martijn"):
        interaction.reply({
          content: `"${martijn[random(martijn.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "sonny"):
        interaction.reply({
          content: `"${sonny[random(sonny.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "tom"):
        interaction.reply({
          content: `"${tom[random(tom.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
      case (inputName = "ying"):
        interaction.reply({
          content: `"${ying[random(ying.length)]}" - ${capFirstLetter(
            inputName
          )}`,
        });
        break;
    }
  }
});

async function main() {
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
