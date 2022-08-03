import { Box, styled, Typography } from "@mui/material";
import { DownloadIcon } from "./DownloadIcon";

const DownloadButton = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  borderColor: "#5BBCAD",
  color: "#5BBCAD",
  textTransform: "none",
  height: "78px",
  fontSize: "40px",
  border: "1px solid #5BBCAD",
  borderRadius: "8px",
  padding: theme.spacing(2),
  columnGap: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#5bbcad29",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    columnGap: theme.spacing(0),
    height: "58px",
  },
}));

const DownloadButtonLabel = styled(Typography)(({ theme }) => ({
  whiteSpace: "pre-line",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "17px",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    margin: 0,
  },
}));

const StyledDownloadIcon = styled(DownloadIcon)(({ theme }) => ({
  width: 50,
  height: 50,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const DownloadPaperButton = () => {
  const url =
    "https://drive.google.com/file/d/1Bi0_vkyN8UuyJAfVT8OCc7qFVvTnO0yP/view?usp=sharing";
  return (
    <DownloadButton onClick={() => window.open(url, "_blank")}>
      <StyledDownloadIcon />
      <DownloadButtonLabel>{`Download \n Paper`}</DownloadButtonLabel>
    </DownloadButton>
  );
};
