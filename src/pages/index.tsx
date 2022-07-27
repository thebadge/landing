import styled from "styled-components";
import { Box } from "../components/Commons/Box";

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: theme.sizes.xxl,
  lineHeight: "85px",
}));

const SubTittle = styled.p(({ theme }) => ({
  color: theme.colors.white,
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: theme.sizes.xl,
  lineHeight: "85px",
  margin: 0,
}));

const Paragraph = styled.p(({ theme }) => ({
  letterSpacing: "0em",
  textAlign: "left",
  color: theme.colors.white,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: theme.sizes.m,
  lineHeight: "28px",
  margin: 0,
  width: "45%",
}));

const SvgDecoration = styled.div({
  backgroundPositionY: "center",
  backgroundPositionX: "right",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(./hexagonal.svg)`,
  width: "100%",
  position: "absolute",
  height: "600px",
  zIndex: -1,
});

export default function Home() {
  return (
    <Box>
      <SvgDecoration />
      <Title>
        The Badge,
        <SubTittle>
          Information certification <br /> & profile identity
        </SubTittle>
      </Title>
      <Paragraph>
        The Badge is a decentralized certification platform built on Ethereum
        that allows tokenizing on any piece of information coming either
        on-chain or off-chain under the concept of badges. These badges will
        create an on chain identity by being issued as non-transferable and
        verifiable NFTs.
      </Paragraph>
    </Box>
  );
}
