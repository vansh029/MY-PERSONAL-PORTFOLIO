/* eslint-disable react/prop-types */
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Projects = ({ projects }) => (
  <section id="projects" className="projects-section section">
    <div className="container">
      <Typography variant="h2" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <div className="project-item">
              <Typography variant="h4" gutterBottom>
                {project.name}
              </Typography>
              {project.description.map((desc, idx) => (
                <Typography key={idx} variant="subtitle1" gutterBottom>
                  {desc}
                </Typography>
              ))}
              <Typography variant="subtitle2">Tech Stack:</Typography>
              <Grid container spacing={1} mt={1}>
                {project.tags.map((tech, idx) => (
                  <Grid item key={idx}>
                    <Typography
                      variant="body2"
                      style={{ display: "inline-block", marginRight: "5px" }}
                    >
                      {tech.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Grid container justifyContent="flex-start" spacing={1} mt={1}>
                <Grid item>
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Grid>
                {project.demo && (
                  <Grid item>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Grid>
                )}
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  </section>
);

export default Projects;
