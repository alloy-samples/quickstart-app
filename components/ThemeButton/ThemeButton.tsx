import { useTheme } from "next-themes";
import { CSS } from "../../stitches.config";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { StyledThemeButton } from "./ThemeButton.style";

interface ThemeButtonProps {
  style?: React.CSSProperties;
  css?: CSS;
}

export const ThemeButton = ({ style, css }: ThemeButtonProps) => {
  const { setTheme, theme } = useTheme();

  return (
    <StyledThemeButton
      onClick={() => {
        theme?.includes("light") ? setTheme("dark") : setTheme("light");
      }}
      css={css}
      style={style}
    >
      {theme?.includes("light") ? <MoonIcon /> : <SunIcon />}
    </StyledThemeButton>
  );
};
