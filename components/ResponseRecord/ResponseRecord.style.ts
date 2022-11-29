import { keyframes, styled } from "../../stitches.config";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: " column",
  gap: "$2",
});

export const ActionTitle = styled("span", {
  fontWeight: 600,
  color: "$sand11",
  fontSize: "$4",
});

export const ActionText = styled("span", {
  fontSize: "$4",
});

export const Accordion = styled(AccordionPrimitive.Root, {
  width: "100%",
  //backgroundColor: '$sand6'
  borderLeft: "1px solid $sand8",
  borderRight: "1px solid $sand8",
  borderTop: "1px solid $sand8",
});

export const AccordionItem = styled(AccordionPrimitive.Item, {
  borderBottom: "1px solid $sand8",
});
export const AccordionHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
  flexDirection: "column",
});

export const AccordionTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "$sand6",
  padding: "$3 $4",
  height: 40,
  flex: 1,
  display: "flex",
  gap: "$4",
  fontSize: "$4",
  color: "$sand11",
  '&[data-state="closed"]': {
    "&::before": {
      content: "+",
    },
  },
  '&[data-state="open"]': {
    "&::before": {
      content: "-",
    },
  },
  "&:hover": { backgroundColor: "$sand8" },
});

export const AccordionContent = styled(AccordionPrimitive.Content, {
  overflowX: "scroll",
  fontSize: 15,
  color: "$sand12",
  backgroundColor: "$sand4",
  padding: "$3 $4",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
