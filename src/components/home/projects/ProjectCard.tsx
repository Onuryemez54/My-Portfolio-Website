'use client';
import { Button } from '@/components/ui/Button';
import { ButtonKey } from '@/types/i18n/keys';
import { Project } from '@/types/projectType';
import { Code2, ExternalLink, Info } from 'lucide-react';
import { ProjectSubTitle } from './ProjectSubTitle';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <div
      data-testid={`project-card-${project.id}`}
      className="group hover:shadow-primary-500 bg-background ring-primary-600 hover:ring-accent-500 relative overflow-hidden rounded-2xl ring-2 transition-all duration-300 hover:shadow-lg hover:ring-3"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-2xl border-b-2 border-gray-400/60">
        <Image
          src={project.image}
          alt={project.id}
          loading="eager"
          fill
          sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            testId={`project-${project.id}-details`}
            i18nKey={ButtonKey.VIEW_DETAILS}
            variant="icon"
            onAction={onOpen}
            icon={<Info className="h-6 w-6" />}
            size="none"
          />

          {project.liveUrl && (
            <Button
              i18nKey={ButtonKey.VIEW_LIVE}
              variant="icon"
              href={project.liveUrl}
              as="link"
              icon={<ExternalLink className="h-6 w-6" />}
              size="none"
            />
          )}

          <Button
            i18nKey={ButtonKey.VIEW_REPO}
            variant="icon"
            href={project.githubUrl}
            as="link"
            icon={<Code2 className="h-6 w-6" />}
            size="none"
          />
        </div>
      </div>

      <ProjectSubTitle project={project} onOpen={onOpen} />
    </div>
  );
};
