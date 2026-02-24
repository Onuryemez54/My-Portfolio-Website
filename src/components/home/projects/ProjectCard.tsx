'use client';
import { Github, ExternalLink, Info } from 'lucide-react';
import { Project } from '@/types/projectType';
import Image from 'next/image';

interface Props {
  project: Project;
  onOpen: () => void;
}

export const ProjectCard = ({ project, onOpen }: Props) => {
  return (
    <div className="group bg-background/50 border-border ring-accent-400 relative rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:ring-2">
      <div className="relative p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>

        <p className="text-muted-foreground mt-3 line-clamp-3 text-sm">{project.description}</p>

        <div className="group relative h-72 w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="mt-6 flex items-center gap-5">
          <a
            href={project.githubUrl}
            target="_blank"
            className="hover:text-accent-400 transition hover:scale-110"
          >
            <Github size={18} />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="transition hover:scale-110 hover:text-green-400"
            >
              <ExternalLink size={18} />
            </a>
          )}

          <button onClick={onOpen} className="transition hover:scale-110 hover:text-blue-400">
            <Info size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
