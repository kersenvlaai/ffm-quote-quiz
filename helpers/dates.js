import { differenceInHours } from "date-fns";
// import { DateTime } from "luxon";

const today = new Date();

export const sonnyVerlossing = differenceInHours(
  new Date(2022, 12, 31, 0, 0),
  new Date(2022, 10, 16, 21, 19)
);

export const martijnVerlossing = differenceInHours(
  new Date(2022, 12, 9, 0, 0),
  today
);

export const marijnVerlossing = differenceInHours(
  new Date(2023, 8, 15, 0, 0),
  today
);

export const result = differenceInHours(
  new Date(2014, 6, 2, 19, 0),
  new Date(2014, 6, 2, 6, 50)
);
