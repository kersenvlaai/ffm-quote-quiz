export const commands = [
  {
    name: "quote",
    description: "Get a random FFM quote",
    options: [
      {
        name: "name",
        description: "Get a random quote from the name you input",
        type: 3,
        required: true,
        choices: [
          {
            name: "Coen",
            value: "Coen",
          },
          {
            name: "Ian",
            value: "Ian",
          },
          {
            name: "Jeroen",
            value: "Jeroen",
          },
          {
            name: "Kara",
            value: "Kara",
          },
          {
            name: "Leander",
            value: "Leander",
          },
          {
            name: "Lieke",
            value: "Lieke",
          },
          {
            name: "Luuk",
            value: "Luuk",
          },
          {
            name: "Marijn",
            value: "Marijn",
          },
          {
            name: "Martijn",
            value: "Martijn",
          },
          {
            name: "Sonny",
            value: "Sonny",
          },
          {
            name: "Tom",
            value: "Tom",
          },
          {
            name: "Ying",
            value: "Ying",
          },
        ],
      },
    ],
  },
  {
    name: "verlossing",
    description: "gun die kaolo timer",
    options: [
      {
        name: "name",
        description: "hoeveel uur nog over voor die deze dat persoon",
        type: 3,
        required: true,
        choices: [
          {
            name: "Sonny",
            value: "Sonny",
          },
          {
            name: "Martijn",
            value: "Martijn",
          },
          {
            name: "Marijn",
            value: "Marijn",
          },
          {
            name: "now",
            value: "now",
          },
        ],
      },
    ],
  },
];
