export interface IUnitConfig {
  id: string;
  name: string;
  description: string;
}

export interface IUnit {
  id: string;
  config: IUnitConfig;
  quantity: number;
  netRentableArea: number;
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
