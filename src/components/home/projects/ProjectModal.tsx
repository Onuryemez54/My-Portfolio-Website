'use client';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '@/types/projectType';
import { CircleX, Code2, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ButtonKey, ProjectKey } from '@/types/i18n/keys';
import Image from 'next/image';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const t = useTranslations(ProjectKey.TITLE);
  const tButton = useTranslations(ButtonKey.TITLE);

  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const title = project ? t(`${project.id}.title`) : '';
  const description = project ? t(`${project.id}.description`) : '';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={project.id}
            className="bg-background border-accent-border/60 relative max-h-[95vh] w-[80vw] max-w-5xl overflow-y-auto rounded-2xl border px-6 py-12 md:px-8 md:py-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-7 md:gap-8">
              <div className="relative h-60 w-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl md:col-span-3 md:h-90">
                <Image
                  src={project.image}
                  alt={project.id}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="text-primary-200 flex flex-col gap-4 md:col-span-4">
                <h2 className="font-heading text-xl font-bold tracking-tight md:text-2xl xl:text-3xl">
                  {title}
                </h2>

                <p className="font-body mt-2 text-sm leading-relaxed md:text-base">{description}</p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border-border font-body hover:border-utility-bg rounded-lg border px-3 py-1 text-xs transition-all duration-300 hover:-translate-y-0.5 md:text-sm 2xl:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="font-body flex flex-col items-start gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-primary-300 hover:text-accent-500 flex items-center gap-3 transition-colors duration-300"
                  >
                    <Code2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 2xl:h-6 2xl:w-6" />
                    <span className="text-sm md:text-base 2xl:text-lg">
                      {tButton(ButtonKey.VIEW_REPO)}
                    </span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-primary-300 hover:text-accent-500 flex items-center gap-3 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 2xl:h-6 2xl:w-6" />
                      <span className="text-sm md:text-base 2xl:text-lg">
                        {tButton(ButtonKey.VIEW_LIVE)}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-utility-bg/60 hover:text-utility-hover-bg absolute top-0 right-0 p-1 transition-colors"
            >
              <CircleX className="h-6 w-6 md:h-7 md:w-7" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
