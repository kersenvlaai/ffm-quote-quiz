import { config } from "dotenv";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

import * as quotes from "../constants/quotes.js";
import { commands } from "../constants/commands.js";
import { random } from "../helpers/randomNum.js";
import {
  sonnyVerlossing,
  martijnVerlossing,
  marijnVerlossing,
} from "../helpers/dates.js";
import { capFirstLetter } from "../helpers/capFirstLetter.js";

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

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === "quote") {
      inputName = interaction.options.get("name").value.toLowerCase();
      switch (inputName) {
        case (inputName = "coen"):
          interaction.reply({
            content: `"${
              quotes.coen[random(quotes.coen.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "ian"):
          interaction.reply({
            content: `"${
              quotes.ian[random(quotes.ian.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "jeroen"):
          interaction.reply({
            content: `"${
              quotes.jeroen[random(quotes.jeroen.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "kara"):
          interaction.reply({
            content: `"${
              quotes.kara[random(quotes.kara.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "leander"):
          interaction.reply({
            content: `"${
              quotes.leander[random(quotes.leander.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "lieke"):
          interaction.reply({
            content: `"${
              quotes.lieke[random(quotes.lieke.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "luuk"):
          interaction.reply({
            content: `"${
              quotes.luuk[random(quotes.luuk.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "marijn"):
          interaction.reply({
            content: `"${
              quotes.marijn[random(quotes.marijn.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "martijn"):
          interaction.reply({
            content: `"${
              quotes.martijn[random(quotes.martijn.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "sonny"):
          interaction.reply({
            content: `"${
              quotes.sonny[random(quotes.sonny.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "tom"):
          interaction.reply({
            content: `"${
              quotes.tom[random(quotes.tom.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
        case (inputName = "ying"):
          interaction.reply({
            content: `"${
              quotes.ying[random(quotes.ying.length)]
            }" - ${capFirstLetter(inputName)}`,
          });
          break;
      }
    }
    if (interaction.commandName === "verlossing") {
      inputName = interaction.options.get("name").value.toLowerCase();
      switch (inputName) {
        case (inputName = "sonny"):
          interaction.reply({
            content: `Hou vol ${capFirstLetter(inputName)}: Nog ${
              sonnyVerlossing < 0 ? 0 : sonnyVerlossing
            } uren`,
          });
          break;
        case (inputName = "martijn"):
          interaction.reply({
            content: `Hou vol ${capFirstLetter(inputName)}, nog ${
              martijnVerlossing < 0 ? 0 : martijnVerlossing
            } uren`,
          });
          break;
        case (inputName = "marijn"):
          interaction.reply({
            content: `Hou vol ${capFirstLetter(inputName)}, nog ${
              marijnVerlossing < 0 ? 0 : marijnVerlossing
            } uren`,
          });
          break;
      }
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
