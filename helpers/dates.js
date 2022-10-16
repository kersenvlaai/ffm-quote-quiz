import { differenceInHours, subDays } from "date-fns";

export const sonnyVerlossing = differenceInHours(
  new Date(2022, 12, 31, 0, 0),
  new Date(Date.now())
);

export const martijnVerlossing = differenceInHours(
  new Date(2022, 12, 9, 0, 0),
  new Date(Date.now())
);

export const marijnVerlossing = differenceInHours(
  new Date(2023, 8, 15, 0, 0),
  new Date(Date.now())
);
