import styled from "styled-components";

const Container = styled.div<BoxProps>(({ sx }) => ({
  display: "flex",
  flexDirection: "column",
  ...sx,
}));

type BoxProps = {
  children: React.ReactNode;
  sx?: {};
};
export const Box = ({ children, sx = {} }: BoxProps) => {
  return <Container sx={sx}>{children}</Container>;
};
