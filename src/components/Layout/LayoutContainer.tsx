import styled from "styled-components";
import { BackgroundGradient } from "./BackgroundGradient";

const Content = styled.div({
  position: "absolute",
  marginTop: "5rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
});

type LayaoutContainerProps = {
  children: React.ReactElement;
};

export const LayaoutContainer = ({ children }: LayaoutContainerProps) => {
  return (
    <div>
      <BackgroundGradient />
      <Content>{children}</Content>
    </div>
  );
};
