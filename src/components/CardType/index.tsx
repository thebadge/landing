import Image from "next/image";
import styled from "styled-components";
import { Box } from "../Commons/Box";

const CardBadgeType = styled.div(({ theme }) => ({
  border: "1px solid #66F5DF",
  borderRadius: "10px",
  //  filter: "drop-shadow(0px 0px 8px #FFFFFF)",
  padding: "33px",
  marginLeft: "10%",
  marginRight: "10%",
  display: "flex",
  flexDirection: "row",
  maxHeight: "280px",
  marginBottom: "5%",
}));

const TittleCardBadgeType = styled.p(({ theme }) => ({
  margin: 0,
  color: theme.colors.white,
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: theme.sizes.l,
  lineHeight: "32.75px",
  whiteSpace: "pre-line",
}));

const BodyCardBadgeType = styled.p(({ theme }) => ({
  color: theme.colors.white,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: theme.sizes.m,
  lineHeight: "32px",
}));

type BadgeTypeDescriptionPropsType = {
  tittle: string;
  body: string;
  image: string;
};

export const BadgeTypeDescription = ({
  tittle,
  body,
  image,
}: BadgeTypeDescriptionPropsType) => {
  return (
    <CardBadgeType>
      <Box sx={{ justifyContent: "center", flex: 1, filter: "none" }}>
        <TittleCardBadgeType>{tittle}</TittleCardBadgeType>
        <BodyCardBadgeType>{body}</BodyCardBadgeType>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={image} alt="Ilustration" width={350} height={350} />
      </Box>
    </CardBadgeType>
  );
};
