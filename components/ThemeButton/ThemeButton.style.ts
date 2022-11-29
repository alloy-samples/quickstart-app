import { styled, CSS } from "../../stitches.config";

const StyledThemeButton = styled("button", {
  all: "unset",
  height: "$6",
  width: "$6",
  borderRadius: "$2",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom: "$5",
  right: "$6",
  zIndex: 200,
  cursor: "ponter",
  transition: "all 150ms ease",
  border: "1px solid transparent",
  color: "$sand11",
  "&:focus-visible": {
    border: "1px solid $colors$orange8",
    boxShadow: "0px 0px 0px 1px $colors$orangeA5",
  },

  "&:hover": {
    backgroundColor: "$background-accent-hover",
    color: "$text-primary",
    svg: {
      transform: "rotate(15deg)",
    },
  },
});

export { StyledThemeButton };
