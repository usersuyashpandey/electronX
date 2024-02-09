import React, { useState } from "react";
import { Box, ThemeProvider } from "@mui/system";
import { Outlet } from "react-router-dom";
import LeftsidePanel from "./LeftsidePanel";
import lightTheme from "../../style/LightTheme";
import darkTheme from "../../style/DarkTheme";

const Layout: React.FC = () => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const handleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = themeMode === "light" ? lightTheme : darkTheme;

  async function checkForUpdate() {
    try {
      const githubFetch = await fetch(
        "https://api.github.com/repos/usersuyashpandey/electronX/releases"
      );
      if (!githubFetch.ok) {
        alert(
          "There was an error checking for a new update, check your WiFi connection and try again from the menubar."
        );
        return;
      }
      const releaseJSON = await githubFetch.json();
      console.log("releaseJson", releaseJSON);
    } catch (error) {
      console.error(error);
    }
  }
  checkForUpdate();

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          marginTop: -1,
          marginRight: -1,
          padding: 0,
          backgroundColor: theme.palette.background.screen,
        }}
      >
        <LeftsidePanel handleTheme={handleTheme} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
