import { styled } from "../../stitches.config";

export const Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  fontWeight: "500",
  boxSizing: "border-box",
  color: "$sand1",
  display: "flex",
  justifyContent: "center",
  height: "$7",
  padding: "$2 $4",
  fontSize: "$4",
  alignItems: "center",
  borderRadius: "$2",
  backgroundColor: "$sand12",
  transition: "all 150ms ease",
  border: "1px solid transparent",

  "&:hover": {
    backgroundColor: "$sand11",
  },
  "&:focus-visible": {
    border: "1px solid $colors$orange8",
    boxShadow: "0px 0px 0px 1px $colors$orangeA5",
  },
  variants: {
    stretch: {
      true: {
        width: "100%",
      },
      false: {
        width: "auto",
      },
    },
    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        "&:hover": {
          backgroundColor: "$sand12",
        },
      },
    },
    outline: {
      true: {
        width: "fit-content",
        backgroundColor: "transparent",
        border: "1px solid $sand12",
        color: "$sand12",
        "&:hover": {
          backgroundColor: "$sand3",
        },
        height: "$6",
        fontSize: "$3",
      },
    },
  },
});
