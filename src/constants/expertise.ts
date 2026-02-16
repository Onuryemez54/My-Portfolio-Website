import { ExpertiseCategory, TechStackCategory } from '@/types/expertiseTypes';
import { TabContentKey, TabsKey } from '@/types/i18n/keys';
import {
  Atom,
  Layers,
  FileCode2,
  Wind,
  Boxes,
  Database,
  Flame,
  Cloud,
  Server,
  GitBranch,
  Github,
  Monitor,
  Figma,
  Gauge,
  Search,
  TestTube,
  Beaker,
  Play,
  Award,
  GraduationCap,
  Briefcase,
} from 'lucide-react';

export const techStackTabs: { key: TechStackCategory; label: TabsKey }[] = [
  { key: TechStackCategory.FRONTEND, label: TabsKey.FRONTEND },
  { key: TechStackCategory.BACKEND, label: TabsKey.BACKEND },
  { key: TechStackCategory.TOOLS, label: TabsKey.TOOLS },
  { key: TechStackCategory.TESTING, label: TabsKey.TESTING },
];

export const expertiseTabs: { key: ExpertiseCategory; label: TabsKey }[] = [
  { key: ExpertiseCategory.EDUCATION, label: TabsKey.EDUCATION },
  { key: ExpertiseCategory.CERTIFICATIONS, label: TabsKey.CERTIFICATIONS },
  { key: ExpertiseCategory.EXPERIENCE, label: TabsKey.EXPERIENCE },
];

export type ContentItem = {
  label: TabContentKey;
  icon: React.ElementType;
};

export const techStackContent: Record<TechStackCategory, ContentItem[]> = {
  [TechStackCategory.FRONTEND]: [
    { label: TabContentKey.REACT, icon: Atom },
    { label: TabContentKey.NEXT_JS, icon: Layers },
    { label: TabContentKey.TYPESCRIPT, icon: FileCode2 },
    { label: TabContentKey.TAILWIND_CSS, icon: Wind },
    { label: TabContentKey.REDUX, icon: Boxes },
    { label: TabContentKey.TANSTACK_QUERY, icon: Database },
  ],

  [TechStackCategory.BACKEND]: [
    { label: TabContentKey.SUPABASE, icon: Database },
    { label: TabContentKey.FIREBASE, icon: Flame },
    { label: TabContentKey.SERVER_ACTIONS, icon: Server },
    { label: TabContentKey.PRISMA, icon: Boxes },
    { label: TabContentKey.REST_API, icon: Cloud },
  ],
  [TechStackCategory.TOOLS]: [
    { label: TabContentKey.GIT, icon: GitBranch },
    { label: TabContentKey.GITHUB, icon: Github },
    { label: TabContentKey.VS_CODE, icon: Monitor },
    { label: TabContentKey.FIGMA, icon: Figma },
    { label: TabContentKey.WEB_PERFORMANCE, icon: Gauge },
    { label: TabContentKey.SEO, icon: Search },
  ],
  [TechStackCategory.TESTING]: [
    { label: TabContentKey.VITEST, icon: TestTube },
    { label: TabContentKey.REACT_TESTING_LIBRARY, icon: Beaker },
    { label: TabContentKey.PLAYWRIGHT, icon: Play },
  ],
};

export const expertiseContent: Record<ExpertiseCategory, ContentItem[]> = {
  [ExpertiseCategory.EDUCATION]: [
    { label: TabContentKey.CODE2CAREER, icon: Award },
    { label: TabContentKey.BACHELOR, icon: GraduationCap },
  ],
  [ExpertiseCategory.CERTIFICATIONS]: [
    { label: TabContentKey.FREECODECAMP, icon: Award },
    { label: TabContentKey.REACT_TESTING, icon: TestTube },
    { label: TabContentKey.JAVASCRIPT, icon: FileCode2 },
  ],
  [ExpertiseCategory.EXPERIENCE]: [
    { label: TabContentKey.PICK_YOUR_POUR, icon: Briefcase },
    { label: TabContentKey.INDEPENDENT_PROJECTS, icon: Layers },
  ],
};
