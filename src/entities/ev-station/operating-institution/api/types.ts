export interface ResponseFetchListDto {
  resultCode: number;
  description: string;
  needRedirect: boolean;
  resultData: OperatingInstitutionDto[];
}

export interface OperatingInstitutionDto {
  label: string;
  value: string;
}
