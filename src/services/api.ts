


// Define login shape
interface LoginCredentials {
  username: string;
  password: string;
}

// Define returned user
interface UserData {
  username: string;
  token: string;
}

export const loginUser = async ({ username, password }: LoginCredentials): Promise<UserData> => {
  console.log("Attempting login with:", username, password);

  if (username === "emilys" && password === "emilyspass") {
    const fakeData: UserData = {
      username,
      token: "fake-jwt-token",
    };
    return fakeData;
  } else {
    throw new Error("Invalid credentials");
  }
};
