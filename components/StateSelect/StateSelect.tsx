import React from "react";
import { styled } from "../../stitches.config";
import { CaretDownIcon } from "@radix-ui/react-icons";

const Box = styled("div");
const StyledSelect = styled("select", {
  boxSizing: "border-box",
  position: "relative",
  height: "$7",
  padding: "$1 $6 $1 $3",
  fontSize: "$4",
  borderRadius: "$2",
  border: "1px solid $sand7",
  backgroundColor: "transparent",
  outline: "none",
  width: "100%",
  transition: "all 150ms ease",
  appearance: "none",
  "&:hover": {
    backgroundColor: "$sand3",
    border: "1px solid $sand8",
  },
  "&:focus-visible": {
    border: "1px solid $colors$orange8",
    boxShadow: "0px 0px 0px 1px $colors$orangeA5",
  },
});

interface SelectProps {
  onChange?: (value: string) => void;
  id?: string;
  defaultValue?: string;
  value?: string;
}
export const StateSelect = ({
  onChange,
  id,
  defaultValue,
  value,
}: SelectProps) => {
  const handleChange = onChange
    ? (event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.currentTarget.value)
    : undefined;

  return (
    <Box
      css={{
        position: "relative",
      }}
    >
      <StyledSelect
        defaultValue={defaultValue}
        onChange={handleChange}
        id={id}
        value={value}
      >
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </StyledSelect>
      <Box
        css={{
          position: "absolute",
          right: 12,
          top: 16,
          pointerEvents: "none !important",
        }}
      >
        {" "}
        <CaretDownIcon />
      </Box>
    </Box>
  );
};
