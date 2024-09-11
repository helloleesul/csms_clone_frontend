export interface ResponseFetchUserDto {
  resultCode: number;
  description: string;
  needRedirect: boolean;
  resultData: {
    resultCode: number;
    description: string;
    needRedirect: boolean;
    resultData: {
      userId: string;
      idPk: string;
      role: number;
      detailRole: {
        menu: number;
        readRole: number;
        updateRole: number;
        deleteRole: number;
        createRole: number;
      }[];
      isRoaming: boolean;
    };
  };
}
