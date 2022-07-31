import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

const CardBadgeType = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    maxHeight: "none",
  },
}));

const TittleCardBadgeType = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.common.white,
  fontStyle: "normal",
  fontWeight: "900",
  fontSize: "32px",
  lineHeight: "32.75px",
  whiteSpace: "pre-line",
  marginBottom: theme.spacing(3),
}));

const BodyCardBadgeType = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18px",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
          filter: "none",
        }}
      >
        <Box m="auto">
          <TittleCardBadgeType>{tittle}</TittleCardBadgeType>
          <BodyCardBadgeType>{body}</BodyCardBadgeType>
        </Box>
      </Box>
      <ImageContainer>
        <Image src={image} alt="Ilustration" width={350} height={350} />
      </ImageContainer>
    </CardBadgeType>
  );
};
