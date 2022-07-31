import { Box, styled } from "@mui/material";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { TheBadgeLogo } from "./TheBadgeLogo";

const Content = styled(Box)({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
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
      </Content>
    </div>
  );
};
