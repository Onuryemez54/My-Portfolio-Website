import { ExpertiseCategory, TechStackCategory } from '@/types/expertiseTypes';
import { Code2, Server, Wrench, TestTube, GraduationCap, Award, Briefcase } from 'lucide-react';

export const techStackTabs: { key: TechStackCategory }[] = [
  { key: TechStackCategory.FRONTEND },
  { key: TechStackCategory.BACKEND },
  { key: TechStackCategory.TOOLS },
  { key: TechStackCategory.TESTING },
];

export const expertiseTabs: { key: ExpertiseCategory }[] = [
  { key: ExpertiseCategory.EDUCATION },
  { key: ExpertiseCategory.CERTIFICATIONS },
  { key: ExpertiseCategory.EXPERIENCE },
];

export type ContentItem = {
  label: string;
  icon: React.ElementType;
};

export const techStackContent: Record<TechStackCategory, ContentItem[]> = {
  [TechStackCategory.FRONTEND]: [
    { label: 'React', icon: Code2 },
    { label: 'Next.js', icon: Code2 },
    { label: 'TypeScript', icon: Code2 },
    { label: 'Tailwind CSS', icon: Code2 },
  ],
  [TechStackCategory.BACKEND]: [
    { label: 'Supabase', icon: Server },
    { label: 'Firebase', icon: Server },
  ],
  [TechStackCategory.TOOLS]: [
    { label: 'Git', icon: Wrench },
    { label: 'VS Code', icon: Wrench },
  ],
  [TechStackCategory.TESTING]: [
    { label: 'Vitest', icon: TestTube },
    { label: 'React Testing Library', icon: TestTube },
  ],
};

export const expertiseContent: Record<ExpertiseCategory, ContentItem[]> = {
  [ExpertiseCategory.EDUCATION]: [{ label: 'Bachelor of Computer Science', icon: GraduationCap }],
  [ExpertiseCategory.CERTIFICATIONS]: [{ label: 'Certified React Developer', icon: Award }],
  [ExpertiseCategory.EXPERIENCE]: [{ label: 'Frontend Developer at ABC Company', icon: Briefcase }],
};
