import React, { useState } from "react";
import { ResponseRecord } from "../../types/types";
import {
  Box,
  ActionText,
  ActionTitle,
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./ResponseRecord.style";

interface ResponseRecordProp {
  responseRecord: ResponseRecord[];
}
const ResponseRecorder = ({ responseRecord }: ResponseRecordProp) => {
  return (
    <Accordion type={"multiple"}>
      {responseRecord &&
        responseRecord.map((record, i) => {
          return (
            <AccordionItem value={i.toString()} key={i}>
              <AccordionHeader>
                <AccordionTrigger>
                  <Box>
                    <ActionTitle>Action taken:</ActionTitle>
                    <ActionText>{record?.action}</ActionText>
                  </Box>
                </AccordionTrigger>
                <AccordionContent>
                  <ActionTitle>Response:</ActionTitle>
                  <pre>{JSON.stringify(record.apiResponse, null, 2)}</pre>
                </AccordionContent>
              </AccordionHeader>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export { ResponseRecorder };
