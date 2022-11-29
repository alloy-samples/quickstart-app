import { styled } from "../../stitches.config";

export const Input = styled("input", {
  boxSizing: "border-box",
  height: "$7",
  padding: "$3",
  fontSize: "$4",
  borderRadius: "$2",
  border: "1px solid $sand7",
  backgroundColor: "transparent",
  outline: "none",
  width: "100%",
  transition: "all 150ms ease",
  "&:hover": {
    backgroundColor: "$sand3",
    border: "1px solid $sand8",
  },
  "&:focus-visible": {
    border: "1px solid $colors$orange8",
    boxShadow: "0px 0px 0px 1px $colors$orangeA5",
  },
});
