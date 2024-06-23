/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Vansh Bansal
      </Typography>
      <ScrollLink to="summary" smooth duration={500}>
        <Button color="inherit">Home</Button>
      </ScrollLink>
      <ScrollLink to="skills" smooth duration={500}>
        <Button color="inherit">Skills</Button>
      </ScrollLink>
      <ScrollLink to="experience" smooth duration={500}>
        <Button color="inherit">Experience</Button>
      </ScrollLink>
      <ScrollLink to="education" smooth duration={500}>
        <Button color="inherit">Education</Button>
      </ScrollLink>
      <ScrollLink to="projects" smooth duration={500}>
        <Button color="inherit">Projects</Button>
      </ScrollLink>
    </Toolbar>
  </AppBar>
);

export default Navbar;
