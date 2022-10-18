export interface IAcquisition {
  id: string;
  date: Date;
  price: number;
  taxRate: number;
  closingCostRate: number;
}

export interface ILeasing {
  id: string;
  comissionRate: number;
  tenantIncentive: number;
  monthsRentFree: number; // TODO: ??
  stablizedVacancyRate: number;
  badDebtRate: number;
  renewalRate: number;
}

export interface ISale {
  id: string;
  date: Date;
  capRate: number;
  saleCostRate: number;
}

type LoanType =
  | "io" // interest only
  | "amort"; // amortization

export interface IInvestmentLoan {
  id: string;
  loanToValueRatio: number;
  marginRatio: number;
  loanType: LoanType;
  /** integer month */
  term: number;
}
