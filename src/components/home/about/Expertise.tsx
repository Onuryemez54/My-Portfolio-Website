'use client';
import {
  expertiseContent,
  expertiseTabs,
  techStackContent,
  techStackTabs,
} from '@/constants/expertise';
import { ExpertiseCategory, TechStackCategory } from '@/types/expertiseTypes';
import { Divider } from '@/components/common/Divider';
import { renderContent } from './RenderContent';
import { TabList } from './TabList';
import { useState } from 'react';

export const Expertise = () => {
  const [activeTechStackTab, setActiveTechStackTab] = useState<TechStackCategory>(
    TechStackCategory.FRONTEND
  );
  const [activeExpertiseTab, setActiveExpertiseTab] = useState<ExpertiseCategory>(
    ExpertiseCategory.EDUCATION
  );

  return (
    <div className="grid items-start justify-start gap-10 md:grid-cols-12 md:gap-0">
      <div className="col-span-5 h-32 w-full gap-4">
        <TabList<TechStackCategory>
          tabs={techStackTabs}
          activeTab={activeTechStackTab}
          onChange={setActiveTechStackTab}
        />
        {renderContent(activeTechStackTab, techStackContent)}
      </div>
      <Divider direction="vertical" className="col-span-2 hidden md:flex md:justify-center" />
      <Divider className="col-span-5 flex md:hidden" />
      <div className="col-span-5 h-48 w-full gap-4">
        <TabList<ExpertiseCategory>
          tabs={expertiseTabs}
          activeTab={activeExpertiseTab}
          onChange={setActiveExpertiseTab}
        />
        {renderContent(activeExpertiseTab, expertiseContent, true)}
      </div>
    </div>
  );
};
