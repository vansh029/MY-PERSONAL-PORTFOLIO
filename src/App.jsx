import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import ContrastIcon from "@mui/icons-material/Contrast";
import Navbar from "./NavBar";
import Summary from "./Summary";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import {
  summary,
  skills,
  experiences,
  education,
  projects,
} from "./Data/constants";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#be1adb",
    },
    background: {
      default: "#FFFFFF",
      paper: "#f0f0f0",
    },
    text: {
      primary: "#111111",
      secondary: "#48494a",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#854CE6",
    },
    background: {
      default: "#1C1C27",
      paper: "#1C1E27",
    },
    text: {
      primary: "#F2F3F4",
      secondary: "#b1b2b3",
    },
  },
});

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Navbar />
      <Button
        onClick={toggleTheme}
        variant="contained"
        color="primary"
        style={{ margin: "20px auto", display: "block" }}
      >
        <ContrastIcon></ContrastIcon>
      </Button>
      <Summary summary={summary} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Projects projects={projects} />
    </ThemeProvider>
  );
};

export default App;
