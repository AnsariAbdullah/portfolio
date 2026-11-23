import React from "react";
import { projects } from "../helpers/data";
import {
  AppIcon,
  Button,
  CardActions,
  CardContent,
  CardTitleBar,
  Control,
  Controls,
  MockContent,
  MockNav,
  ProjectCard,
  ProjectGrid,
  ProjectsBody,
  Screenshot,
  Stack,
  Title,
  Window,
} from "../styles/Common.styles";
import { WindowHeader } from "../helpers";

function Projects() {
  return (
    <Window aria-labelledby="projects-heading">
      <WindowHeader title="My_Projects" icon="P" />
      <ProjectsBody>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={projects.title}>
              <CardTitleBar>
                <Title>
                  <AppIcon aria-hidden="true">{project.number}</AppIcon>
                  {project.title}.html
                </Title>
                <Controls aria-hidden="true">
                  <Control>×</Control>
                </Controls>
              </CardTitleBar>
              <Screenshot
                $palette={project.palette}
                role="img"
                aria-label={`${project.title} project screenshot placeholder`}
              >
                <MockNav />
                <MockContent $palette={project.palette}>
                  <div />
                  <div />
                </MockContent>
              </Screenshot>
              <CardContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Stack aria-label="Technology stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </Stack>
                <CardActions>
                  <Button
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} repository on GitHub`}
                  >
                    GitHub ↗
                  </Button>
                  <Button
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live site`}
                  >
                    Live Site ↗
                  </Button>
                </CardActions>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsBody>
    </Window>
  );
}

export default Projects;
