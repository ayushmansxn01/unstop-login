import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const Card = styled(Box)({
  padding: "32px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  textAlign: "center",
  backgroundColor: "#fff",
  minWidth: "280px",
});

export const LogoutButton = styled(Button)({
  marginTop: "16px",
  backgroundColor: "#5A4AE3",
  color: "#fff",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#4638c8",
  },
});
