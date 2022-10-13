import { differenceInHours } from "date-fns";
import { DateTime } from "luxon";

export const sonnyVerlossing = differenceInHours(
  new Date(2023, 1, 1, 0, 0, 0, 0),
  new Date()
);

export const martijnVerlossing = differenceInHours(
  new Date(2022, 12, 9, 0, 0, 0, 0),
  new Date()
);

export const marijnVerlossing = differenceInHours(
  new Date(2023, 8, 15, 0, 0, 0, 0),
  new Date()
);
