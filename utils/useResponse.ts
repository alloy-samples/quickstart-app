import { ResponseRecord } from "../types/types";
import { ResponseContext } from "../components/layouts/layout";
import { Dispatch, SetStateAction, useContext } from "react";

interface ResponseContext {
  responseRecord: ResponseRecord[] | undefined;
  setResponseRecord: Dispatch<SetStateAction<ResponseRecord[] | undefined>>;
}

export const recordResponse = (
  response: ResponseRecord,
  responseContext: ResponseContext
) => {
  responseContext.responseRecord
    ? responseContext.setResponseRecord([
        ...responseContext.responseRecord,
        response,
      ])
    : responseContext.setResponseRecord([response]);
};
