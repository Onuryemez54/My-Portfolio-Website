'use client';
import {
  expertiseContent,
  expertiseTabs,
  techStackContent,
  techStackTabs,
} from '@/constants/expertise';
import { ExpertiseCategory, TechStackCategory } from '@/types/expertiseTypes';
import { Divider } from '@/components/common/Divider';
import { TabList } from './TabList';
import { useState } from 'react';
import { renderContent } from './RenderContent';

export const Expertise = () => {
  const [activeTechStackTab, setActiveTechStackTab] = useState<TechStackCategory>(
    TechStackCategory.FRONTEND
  );
  const [activeExpertiseTab, setActiveExpertiseTab] = useState<ExpertiseCategory>(
    ExpertiseCategory.EDUCATION
  );

  return (
    <div className="grid items-center justify-start gap-10 md:grid-cols-12 md:gap-0">
      <div className="col-span-5 w-full gap-4">
        <TabList<TechStackCategory>
          tabs={techStackTabs}
          activeTab={activeTechStackTab}
          onChange={setActiveTechStackTab}
        />
        {renderContent(activeTechStackTab, techStackContent)}
      </div>
      <Divider direction="vertical" className="col-span-2 hidden md:flex md:justify-center" />
      <div className="col-span-5 w-full gap-4">
        <TabList<ExpertiseCategory>
          tabs={expertiseTabs}
          activeTab={activeExpertiseTab}
          onChange={setActiveExpertiseTab}
        />
        {renderContent(activeExpertiseTab, expertiseContent)}
      </div>
    </div>
  );
};
