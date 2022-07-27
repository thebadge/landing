import styled from "styled-components";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
});

type BoxProps = {
  children: React.ReactNode;
};
export const Box = ({ children }: BoxProps) => {
  return <Container>{children}</Container>;
};
