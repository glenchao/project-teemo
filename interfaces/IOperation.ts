import { IUnit } from "./IAsset";

export type OperationFrequency = "annual" | "quarterly" | "monthly";

export interface IRentalUnit {
  id: string;
  unit: IUnit;
  rent: number;
}

export interface IOperation {
  id: string;
  frequency: OperationFrequency;
  opexMarginRate: number;
  rentalUnits: IRentalUnit[];
  otherIncome: Record<string, number>;
  otherExpense: Record<string, number>;
}
