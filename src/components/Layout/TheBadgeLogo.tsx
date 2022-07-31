import { Box, styled } from "@mui/material";

const LogoSvg = styled(Box)(({ theme }) => ({
  backgroundPositionY: "center",
  backgroundPositionX: "right",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(./logo.svg)`,
  position: "relative",
  height: "70px",
  width: "212px",
  marginTop: theme.spacing(4),
  zIndex: 1,
}));
export const TheBadgeLogo = () => {
  return <LogoSvg />;
};
