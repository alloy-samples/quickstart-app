import alloy, { Init } from "@alloyidentity/web-sdk";

const alloyInitParams: Init = {
  key: process.env.ALLOY_SDK!,
  journeyApplicationToken: "",
  journeyToken: process.env.JOURNEY_TOKEN,
  isNext: true,
  evaluationData: {},
};
export function initAlloy(
  journeyApplicationToken?: string,
) {
  if(journeyApplicationToken) {
    alloyInitParams.journeyApplicationToken = journeyApplicationToken;
  }
  return alloy.init(alloyInitParams);
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
