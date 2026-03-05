'use client';
import { ProjectFilterKey, TitleKey } from '@/types/i18n/keys';
import { Container } from '../../ui/Container';
import { SectionKey } from '@/types/sectionTypes';
import { Title } from '@/components/ui/Title';
import { useState } from 'react';
import { Project } from '@/types/projectType';
import { ProjectModal } from './ProjectModal';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/constants/Projects';
import { FadeUp } from '@/components/common/animations/FadeUp';
import { ScrollReveal } from '@/components/common/animations/ScrollReveal';
import { ProjectFilterTabs } from './ProjectFilterTabs';

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeTech, setActiveTech] = useState<ProjectFilterKey>(ProjectFilterKey.ALL);

  const filteredProjects =
    activeTech === ProjectFilterKey.ALL
      ? projects
      : projects.filter((project) => project.techStack.includes(activeTech));

  return (
    <Container id={SectionKey.PROJECTS}>
      <div className="flex flex-col items-center justify-center gap-3">
        <FadeUp initialY={20}>
          <Title
            testId="projects-title"
            variant="secondary"
            i18nKey={TitleKey.PROJECTS}
            underline
          />
        </FadeUp>

        <ProjectFilterTabs activeTech={activeTech} setActiveTech={setActiveTech} />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.2}
              initialY={30}
              initialScale={0.9}
              duration={0.5}
            >
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </ScrollReveal>
          ))}
        </div>
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </Container>
  );
};
