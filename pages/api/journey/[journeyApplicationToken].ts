import type { NextApiRequest, NextApiResponse } from "next";

const apiBaseUrl = process.env.API_BASE_URL;
//Do not expose these to the client-side. These tokens are sensitive; They should only exist in server-side.
const authToken =
  process.env.WORKFLOW_TOKEN + ":" + process.env.WORKFLOW_SECRET;
const journeyToken = process.env.JOURNEY_TOKEN!;

const getRequest = async (journeyToken: string, applicationToken: string) => {
  const apiUrl =
    apiBaseUrl +
    "journeys/" +
    journeyToken +
    "/applications/" +
    applicationToken;
  const response = await fetch(apiUrl, {
    method: "get",
    headers: {
      Accept: "application/json",
      Authorization: "Basic " + Buffer.from(authToken).toString("base64"),
      "Content-Type": "application/json",
      "alloy-journey-application-sync": "true",
    },
  });
  return response.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { applicationToken } = req.query;
  if (typeof applicationToken !== "string") {
    res.status(400).send("query string must be a string of applicationtoken");
  } else {
    getRequest(journeyToken, applicationToken)
      .then((response) => {
        if (response) {
          res.status(200).json(response);
        } else {
          res.status(400).json("API call was unsuccessful");
        }
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  }
}
