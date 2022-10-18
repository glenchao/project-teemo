export interface IUnitConfiguration {
  id: string;
  name: string;
  description: string;
}

export interface IUnit {
  id: string;
  configuration: IUnitConfiguration;
  quantity: number;
  netRentableArea: number;
}

export type AssetType = "singleFamily" | "apartment" | "office" | "warehouse";

export interface IAsset {
  id: string;
  name: string;
  type: AssetType;
  address: string;
  city: string;
  county: string;
  state: string;
  postalCode: number;
  metropolitanStatisticArea?: string;
  lotSize: number;
  grossArea: number;
  netInternalArea: number;
  netRentableArea: number;
  totalUnits: number;
  parking: number;
  yearBuilt: number;
  yearRenovated?: number;
  avgNumStories: number;
  numBuildings: number;
  units: IUnit[];
}
