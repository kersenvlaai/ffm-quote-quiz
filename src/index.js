import { config } from "dotenv";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

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

// const names = [
//   "Coen",
//   "Ian",
//   "Jeroen",
//   "Kara",
//   "Leander",
//   "Lieke",
//   "Luuk",
//   "Marijn",
//   "Martijn",
//   "Sonny",
//   "Tom",
//   "Ying",
// ];

const sonny = [
  "Het liefst slaap ik voor eeuwig.",
  "Ik heb twee nieuwe snijplanken.",
  "Ik heb maar 3 uur slaap gehad.",
  "Vuile dipshits.",
  "Wie?",
  "Wat gaan jullie vandaag eten? Aardappels, vlees en groente?",
  "Ewa niffo, ik moet ff een jonko klappe.",
  "Het regent niet, dat zijn mijn tranen.",
  "Als het sneeuw moet ik altijd even sneeuw op mijn dak gooien voordat de politie langsvliegt in een heli.",
  "Ik was er al klaar voor in '92. En ik ben geboren in '93.",
  "Na jou.",
  "Ik wil dood.",
  "Het is geen racisme als je ze niet als een ras ziet.",
  "Enige afval wat hij maakt is CO2",
  "Ben je een visionair of een vis?",
  "Ik ga fucking veel drinken. 4 biertjes.",
];

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
    inputName = interaction.options.get("name").value.toLowerCase();
    switch (inputName) {
      case inputName == sonny:
        interaction.reply({ content: `${sonny[random(sonny.length)]}` });
        break;
      // case inputName == martijn:
      //   interaction.reply({ content: `${martijn[random(martijn.length)]}` });
      //   break;
    }
  }
});

async function main() {
  const commands = [
    {
      name: "quote",
      description: "Get a random FFM quote",
      options: [
        {
          name: "name",
          description: "Get a random quote from the name you input",
          type: 3,
          required: false,
          choices: [
            {
              name: "Marijn",
              value: "Martijn",
            },
            {
              name: "Martijn",
              value: "Martijn",
            },
            {
              name: "Ying",
              value: "Ying",
            },
            {
              name: "Sonny",
              value: "Sonny",
            },
          ],
        },
      ],
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
