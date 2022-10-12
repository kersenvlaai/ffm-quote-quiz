import { differenceInHours } from "date-fns";
import { DateTime } from "luxon";

export const sonnyVerlossing = differenceInHours(
  new Date(2023, 1, 1),
  new Date()
);

export const martijnVerlossing = differenceInHours(
  new Date(2022, 9, 12),
  new Date()
);

export const marijnVerlossing = differenceInHours(
  new Date(2023, 15, 8),
  new Date()
);
