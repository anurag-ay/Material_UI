import React, { useState } from "react";
import "./App.css";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { Feed } from "./components/Feed";
import { RightBar } from "./components/RightBar";
import { SideBar } from "./components/SideBar";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.secondary"}>
        <Navbar />
        <Stack
          direction="row"
          spacing={{ xs: 0, sm: 2 }}
          justifyContent="space-between"
        >
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
