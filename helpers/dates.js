import { differenceInHours, addDays } from "date-fns";
// import { DateTime } from "luxon";

const today = addDays(new Date(), 31);

export const sonnyVerlossing = differenceInHours(
  new Date(2022, 12, 31, 0, 0),
  today
);

export const martijnVerlossing = differenceInHours(
  new Date(2022, 12, 9, 0, 0),
  today
);

export const marijnVerlossing = differenceInHours(
  new Date(2023, 8, 15, 0, 0),
  today
);

export const result = differenceInHours(new Date());
