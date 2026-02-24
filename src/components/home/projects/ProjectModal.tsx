'use client';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from '@/types/projectType';
import Image from 'next/image';
import { CircleX } from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
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
            className="bg-background border-accent-border/60 relative max-h-[90vh] w-[80vw] max-w-5xl overflow-y-auto rounded-2xl border px-6 py-12 md:px-8 md:py-16"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-7">
              <div className="relative h-60 w-full overflow-hidden rounded-xl md:col-span-3 md:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              <div className="flex flex-col md:col-span-4">
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h2>

                <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="border-border rounded-lg border px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
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
