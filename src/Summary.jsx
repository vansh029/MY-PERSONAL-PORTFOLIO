/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Summary = ({ summary }) => (
  <section id="summary" className="summary-section section">
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6}>
        <div className="container">
          <Typography variant="h2" align="center" gutterBottom>
            {summary.name}
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            {summary.description}
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            {summary.roles.map((role, index) => (
              <Grid item key={index}>
                <Button variant="outlined" color="primary">
                  {role}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid container justifyContent="center" spacing={2} mt={3}>
            <Grid item>
              <Button href={summary.resume} variant="contained" color="primary">
                Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                href={summary.github}
                variant="contained"
                color="secondary"
              >
                GitHub
              </Button>
            </Grid>
            <Grid item>
              <Button href={summary.linkedin} variant="contained" color="info">
                LinkedIn
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  </section>
);

export default Summary;
