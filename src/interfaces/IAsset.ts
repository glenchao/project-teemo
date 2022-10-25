export interface IUnit {
  id: string;
  type: string;
  configuration: string;
  quantity: number;
  netRentableArea: number;
  rentPerMonth: number;
}

export const assetTypes = ["Single family", "Apartment", "Warehouse"] as const;
export type AssetType = typeof assetTypes[number];

export interface IAssetGeo {
  address: string;
  city: string;
  county: string;
  state: string;
  postalCode: number;
  // Metropolitan Statistic Area
  msa?: string;
}

export interface IAssetStats {
  yearBuilt: number;
  yearRenovated?: number;
  lotSize: number;
  grossArea: number;
  netInternalArea: number;
  netRentableArea: number;
  avgNumStories: number;
  numBuildings: number;
  numParkings: number;
}

export interface IAssetAge {}

export interface IAsset {
  id: string;
  name: string;
  type: AssetType;
  geo: IAssetGeo;
  stats: IAssetStats;
  units: IUnit[];
}
