


// src/utils/validation.ts
export const validateUsername = (username: string): string | null => {
  return username === "emilys" ? null : "Username must be 'emilys'";
};

export const validatePassword = (password: string): string | null => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  return password === "emilyspass" ? null : "Password must be 'emilyspass'";
};

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Invalid email format";
  if (email !== "emilys@gmail.com") return "Email must be 'emilys@gmail.com'";

  return null; // valid email
};