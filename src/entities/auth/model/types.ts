import { Tokens } from "@/shared/model/types.ts";

export interface RequestFetchAuthBody {
  userId: string;
  userPassword: string;
  serviceType?: string;
}

export type ResponseFetchAuthDto = {
  resultCode: string;
  description: string;
  needRedirect: boolean;
  resultData: Tokens;
};

export type ResponseRemoveAuthDto = {
  resultCode: string;
  description: string;
  needRedirect: boolean;
  resultData: {
    status: string;
  };
};
