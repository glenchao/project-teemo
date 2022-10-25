import { IUnit } from "../interfaces/IAsset";
import { getRandomGuid } from "../utilities/Id";

let id: number = 0;

export const mockUnits: IUnit[] = [
  {
    id: getRandomGuid(),
    type: "101",
    configuration: "1bed/1bath",
    netRentableArea: 564,
    quantity: 1,
    rentPerMonth: 1175,
  },
  {
    id: getRandomGuid(),
    type: "102",
    configuration: "1bed/1bath",
    netRentableArea: 586,
    quantity: 1,
    rentPerMonth: 1060,
  },
  {
    id: getRandomGuid(),
    type: "103",
    configuration: "1bed/1bath",
    netRentableArea: 597,
    quantity: 1,
    rentPerMonth: 1150,
  },
  {
    id: getRandomGuid(),
    type: "104",
    configuration: "1bed/1bath",
    netRentableArea: 512,
    quantity: 1,
    rentPerMonth: 1250,
  },
  {
    id: getRandomGuid(),
    type: "106",
    configuration: "Studio",
    netRentableArea: 429,
    quantity: 1,
    rentPerMonth: 1500,
  },
  {
    id: getRandomGuid(),
    type: "201",
    configuration: "1bed/1bath",
    netRentableArea: 564,
    quantity: 1,
    rentPerMonth: 1500,
  },
  {
    id: getRandomGuid(),
    type: "202",
    configuration: "1bed/1bath",
    netRentableArea: 586,
    quantity: 1,
    rentPerMonth: 1400,
  },
  {
    id: getRandomGuid(),
    type: "203",
    configuration: "1bed/1bath",
    netRentableArea: 598,
    quantity: 9,
    rentPerMonth: 1450,
  },
  {
    id: getRandomGuid(),
    type: "204",
    configuration: "1bed/1bath",
    netRentableArea: 507,
    quantity: 1,
    rentPerMonth: 1200,
  },
  {
    id: getRandomGuid(),
    type: "205",
    configuration: "1bed/1bath",
    netRentableArea: 568,
    quantity: 1,
    rentPerMonth: 1300,
  },
];
