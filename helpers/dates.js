import { differenceInHours } from "date-fns";

export const sonny = differenceInHours(
  new Date(),
  new Date(2022, 12, 31, 0, 0)
);
