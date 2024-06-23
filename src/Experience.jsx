/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const Experience = ({ experiences }) => (
  <section id="experience" className="experience-section section">
    <div className="container">
      <Typography variant="h2" align="center" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} key={index}>
            <Box
              p={3}
              boxShadow={3}
              bgcolor="background.paper"
              borderRadius={4}
            >
              <Typography variant="h4" gutterBottom>
                {exp.title} at {exp.company_name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                <i>{exp.date}</i>
              </Typography>
              <Divider sx={{ my: 2 }} />
              {exp.points.map((point, idx) => (
                <Typography key={idx} variant="body1" paragraph>
                  {point}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  </section>
);

export default Experience;
