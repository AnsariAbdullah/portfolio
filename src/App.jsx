import { projects } from "./helpers/data";
import {
  GlobalStyle,
  Desktop,
  Page,
  Window,
  Title,
  AppIcon,
  Controls,
  Control,
  Button,
  SectionHeading,
  Copy,
  ProjectsBody,
  SectionIntro,
  ProjectGrid,
  ProjectCard,
  CardTitleBar,
  Screenshot,
  MockNav,
  MockContent,
  CardContent,
  Stack,
  CardActions,
  ContactBody,
  StatusBar,
  Taskbar,
  StartButton,
  TaskLinks,
  Clock,
} from "./styles/Common.styles.js";
import { WindowHeader } from "./helpers";
import { About, Hero } from "./components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Desktop>
        <Page>
          <Hero />
          <About />
          <Window aria-labelledby="projects-heading">
            <WindowHeader title="My_Projects" icon="P" />
            <ProjectsBody>
              <SectionIntro>
                <SectionHeading id="projects-heading">
                  Selected work
                </SectionHeading>
                <p>
                  Four placeholder projects ready to be replaced with your
                  latest work, screenshots, and links.
                </p>
              </SectionIntro>
              <ProjectGrid>
                {projects.map((project) => (
                  <ProjectCard key={project.title}>
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
                          href="https://github.com/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} repository on GitHub`}
                        >
                          GitHub ↗
                        </Button>
                        <Button
                          href="https://example.com/"
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

          <Window aria-labelledby="contact-heading">
            <WindowHeader title="Contact.exe" icon="@" />
            <ContactBody>
              <div>
                <SectionHeading id="contact-heading">
                  Let’s make something good.
                </SectionHeading>
                <Copy>
                  Have a project, an opportunity, or just want to say hello? My
                  inbox is always open.
                </Copy>
              </div>
              <Button href="mailto:hello@abdullahansari.dev">
                Send an Email <span aria-hidden="true">→</span>
              </Button>
            </ContactBody>
            <StatusBar>
              <span>Internet connection: Online</span>
              <span>No forms required</span>
            </StatusBar>
          </Window>
        </Page>
      </Desktop>

      <Taskbar>
        <StartButton>
          <span aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          Start
        </StartButton>
        <TaskLinks aria-label="Social links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </TaskLinks>
        <Clock>Portfolio © 2025</Clock>
      </Taskbar>
    </>
  );
}
