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

const LogoContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
  [theme.breakpoints.up("xl")]: {
    width: "70%",
  },
}));

export const TheBadgeLogo = () => {
  return (
    <LogoContainer>
      <LogoSvg />
    </LogoContainer>
  );
};
