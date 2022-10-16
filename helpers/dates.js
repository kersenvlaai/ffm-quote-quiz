import { differenceInHours } from "date-fns";

const startDate = new Date();
const sonnyEndDate = new Date(2022, 12, 31);
const martijnEndDate = new Date(2022, 12, 9);
const marijnEndDate = new Date(2023, 8, 15);

export const sonnyVerlossing = differenceInHours(sonnyEndDate, startDate);

export const martijnVerlossing = differenceInHours(martijnEndDate, startDate);

export const marijnVerlossing = differenceInHours(marijnEndDate, startDate);
