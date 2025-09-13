import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const Container = styled(Box)({
  display: "flex",
  height: "100vh",
});

export const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
  [theme.breakpoints.down("md")]: {
    display: "none", // hide on mobile
  },
}));

export const RightSection = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const FormWrapper = styled(Box)({
  width: "80%",
  maxWidth: "400px",
  padding: "32px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  backgroundColor: "#fff",
});

export const SocialButton = styled(Button)({
  marginBottom: "12px",
  textTransform: "none",
  justifyContent: "flex-start",
  borderColor: "#ddd",
  color: "#333",
  fontWeight: 500,
});

export const LoginButton = styled(Button)({
  marginTop: "16px",
  backgroundColor: "#5A4AE3",
  color: "#fff",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#4638c8",
  },
});
