import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { TheBadgeLogo } from "./TheBadgeLogo";

const Content = styled(Box)({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
});

const Footer = styled(Box)({
  position: "relative",
  bottom: 0,
  padding: "5%",
  display: "flex",
  flexDirection: "column",
  background: "rgba(0, 0, 0, 0.58)",
  height: 100,
});

type LayoutContainerProps = {
  children: React.ReactElement;
};

export const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>
        <TheBadgeLogo />
        {children}
        <Footer>
          <Typography>Social Media</Typography>
        </Footer>
      </Content>
    </div>
  );
};
