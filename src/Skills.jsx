/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

const Skills = ({ skills }) => (
  <section id="skills" className="skills-section section">
    <div className="container">
      <Typography variant="h2" align="center" gutterBottom>
        Skills
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill.name}
              variant="outlined"
              color="primary"
              style={{ margin: "5px" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  </section>
);

export default Skills;
