'use client';
import { TitleKey } from '@/types/i18n/keys';
import { Container } from '../../ui/Container';
import { SectionKey } from '@/types/sectionTypes';
import { Title } from '@/components/ui/Title';
import { useState } from 'react';
import { Project } from '@/types/projectType';
import { ProjectModal } from './ProjectModal';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/constants/Projects';
import { FadeUp } from '@/components/common/animations/FadeUp';
import { cardItemVariants, listVariants } from '@/constants/listVariants';

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Container id={SectionKey.PROJECTS}>
      <div className="flex flex-col items-center justify-center">
        <FadeUp initialY={20}>
          <Title variant="secondary" i18nKey={TitleKey.PROJECTS} />
        </FadeUp>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          layout
          className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.li key={project.id} variants={cardItemVariants}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </motion.li>
          ))}
        </motion.ul>
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </Container>
  );
};
