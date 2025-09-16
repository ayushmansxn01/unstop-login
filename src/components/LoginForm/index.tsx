
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { AccountCircle, Email, Key, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { Container, LeftSection, RightSection, FormWrapper, SocialButton, LoginButton } from "./styles";
import { validateUsername, validateEmail, validatePassword } from "../../utils/validation";

import firstPageImage from "../../assets/images/firstPageImage.svg";
import googleImage from "../../assets/images/googleImage.svg";
import faceBookImage from "../../assets/images/faceBookImage.svg";
import { loginUser } from "../../services/api";

interface LoginFormProps {
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setUser }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // for display & validation only
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});

  const validate = () => {
    const temp: Record<string, string> = {};
    const uErr = validateUsername(username);
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);

    if (uErr) temp.username = uErr;
    if (eErr) temp.email = eErr;
    if (pErr) temp.password = pErr;

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    const res = await loginUser({ username, password }); // email not included
    // <- ADD THIS:
    localStorage.setItem("userData", JSON.stringify(res));
    setUser(res);
    navigate("/home");
  } catch (error: any) {
    alert(error.message || "Login failed");
  }
};
  return (
    <Container>
      {/* Left Image */}
      <LeftSection>
        <img src={firstPageImage} alt="Login Illustration" width="70%" />
      </LeftSection>

      {/* Right Form */}
      <RightSection>
        <FormWrapper>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Welcome to <span style={{ color: "#5A4AE3" }}>Unstop</span>
          </Typography>

          {/* Social logins */}
          <SocialButton fullWidth variant="outlined">
            <img src={googleImage} alt="Google" width="20" style={{ marginRight: 8 }} />
            Login with Google
          </SocialButton>

          <SocialButton fullWidth variant="outlined">
            <img src={faceBookImage} alt="Facebook" width="20" style={{ marginRight: 8 }} />
            Login with Facebook
          </SocialButton>

          <Typography textAlign="center" my={2}>
            OR
          </Typography>

          {/* Username */}
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* Email (validation only) */}
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* Password */}
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* Remember / Forgot */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
              Forgot Password?
            </Typography>
          </Box>

          {/* Login */}
          <LoginButton fullWidth onClick={handleSubmit}>
            Login
          </LoginButton>

          {/* Register */}
          <Typography variant="body2" textAlign="center" mt={2}>
            Don’t have an account?{" "}
            <span style={{ color: "#5A4AE3", cursor: "pointer" }}>Register</span>
          </Typography>
        </FormWrapper>
      </RightSection>
    </Container>
  );
};

export default LoginForm;
