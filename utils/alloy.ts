import alloy, { Init } from "@alloyidentity/web-sdk";
import { EvaluationData } from "../types/types";

const alloyInitParams: Init = {
  key: process.env.ALLOY_SDK!,
  journeyApplicationToken: "",
  journeyToken: process.env.JOURNEY_TOKEN,
  isNext: true,
  evaluationData: {},
};
export function initAlloy(
  journeyApplicationToken: string,
  evaluationData?: EvaluationData
) {
  alloyInitParams.journeyApplicationToken = journeyApplicationToken;

  if (evaluationData) {
    const evalData = {
      nameFirst: evaluationData.name_first,
      nameLast: evaluationData.name_last,
      addressLine1: evaluationData.address_line_1,
      addressLine2: "",
      addressCity: evaluationData.address_city,
      addressState: evaluationData.address_state,
      addressPostalCode: evaluationData.address_postal_code,
      addressCountryCode: evaluationData.address_country_code,
      birthDate: evaluationData.birth_date,
    };
    alloyInitParams.evaluationData = evalData;
  }
  alloy.init(alloyInitParams);
}

export function closeAlloy() {
  alloy.close();
}

export function openAlloy(cb: any, anchorElementId?: string) {
  alloy.open(cb, anchorElementId);
}

export function getJourneyToken() {
  return alloyInitParams.journeyToken;
}
