'use client';
import { ProjectKey } from '@/types/i18n/keys';
import { Project } from '@/types/projectType';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const ProjectSubTitle = ({ project, onOpen }: { project: Project; onOpen: () => void }) => {
  const t = useTranslations(ProjectKey.TITLE);
  const title = t(`${project.id}.title`);
  const description = t(`${project.id}.description`);
  return (
    <div className="text-primary-200 flex h-full flex-col p-4">
      <div className="flex gap-2">
        {project.techStack?.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="border-border group-hover:border-accent-500 rounded-lg border px-3 py-1 text-xs transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <h3
        data-testid={`project-${project.id}-title`}
        className="relative mt-3 text-lg font-semibold"
      >
        {title}
        <span className="bg-nav-active-foreground absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-300 group-hover:w-full" />
      </h3>

      <p data-testid={`project-${project.id}-desc`} className="mt-2 line-clamp-2 text-sm">
        {description}
      </p>

      <div className="mt-auto flex justify-end">
        <span
          onClick={onOpen}
          className="text-primary-200 group-hover:text-accent-500 pt-4 pr-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
        >
          <ArrowRight size={20} />
        </span>
      </div>
    </div>
  );
};
