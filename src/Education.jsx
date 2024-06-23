/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Education = ({ education }) => (
  <section id="education" className="education-section section">
    <div className="container">
      <Typography variant="h2" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container justifyContent="center" spacing={4}>
        {education.map((edu, index) => (
          <Grid item xs={12} key={index}>
            <div className="education-item">
              <Typography variant="h4" gutterBottom>
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {edu.school} - <i>{edu.date}</i>
              </Typography>
              <Typography variant="body1" paragraph>
                Grade: {edu.grade}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  </section>
);

export default Education;
