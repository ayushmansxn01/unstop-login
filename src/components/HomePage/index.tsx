


import React from "react";
import { Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container, Card, LogoutButton } from "./styles";
import userProfileImage from "../../assets/images/userProfileImage.svg";

interface HomePageProps {
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const HomePage: React.FC<HomePageProps> = ({ setUser }) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null); // update AppRoutes state
    navigate("/auth/login");
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Welcome to <span style={{ color: "#5A4AE3" }}>Unstop</span>
      </Typography>

      <Card>
        <Avatar src={userProfileImage} sx={{ width: 80, height: 80, margin: "auto" }} />
        <Typography variant="h6" mt={2}>
          {userData.username || "Emilys"}
        </Typography>
        <Typography variant="body2">{userData.email || "emilys@gmail.com"}</Typography>
        <Typography variant="body2">Female</Typography>
        <LogoutButton variant="contained" onClick={handleLogout}>
          Logout
        </LogoutButton>
      </Card>
    </Container>
  );
};

export default HomePage;
