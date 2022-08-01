import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

const CardBadgeType = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid #66F5DF",
  borderRadius: "10px",
  //  filter: "drop-shadow(0px 0px 8px #FFFFFF)",
  padding: "33px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "row",
  maxHeight: "280px",
  maxWidth: "1200px",
  marginBottom: "5%",
  [theme.breakpoints.down("md")]: {
    maxHeight: "none",
    marginBottom: theme.spacing(3),
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
  [theme.breakpoints.up("xl")]: {
    fontWeight: "800",
    fontSize: "40px",
    lineHeight: "120%",
  },
}));

const BodyCardBadgeType = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18px",
  [theme.breakpoints.down("md")]: {
    maxHeight: "none",
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.up("xl")]: {
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "120%",
  },
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

const LittleBadgeAdorment = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: theme.spacing(3),
  transform: "translateY(-30%)",
  [theme.breakpoints.down("md")]: {
    right: theme.spacing(1),
  },
}));

type BadgeTypeDescriptionPropsType = {
  tittle: string;
  body: string;
  image: string;
  adorment: string;
};

export const BadgeTypeDescription = ({
  tittle,
  body,
  image,
  adorment,
}: BadgeTypeDescriptionPropsType) => {
  return (
    <CardBadgeType>
      <LittleBadgeAdorment>
        <Image src={adorment} alt="Ilustration" width={45} height={65} />
      </LittleBadgeAdorment>
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
