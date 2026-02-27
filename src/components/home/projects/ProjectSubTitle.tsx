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
    <div className="group text-primary-200 flex h-full flex-col p-4">
      <div className="flex gap-2">
        {project.techStack?.slice(0, 2).map((tech) => (
          <span key={tech} className="border-border rounded-lg border px-3 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>

      <p className="mt-2 line-clamp-2 text-sm">{description}</p>

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
