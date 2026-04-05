import React, { memo, useCallback, useState } from 'react';
import Image from 'next/image';
import { ConcertData } from '@/types';

interface ProjectSectionProps {
  data: ConcertData;
  showLeftSection: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = memo(({ data, showLeftSection }) => {
  const [thinkingIndex, setThinkingIndex] = useState<number | null>(null);

  const handleTouchStart = useCallback((index: number) => {
    setThinkingIndex(index);
    setTimeout(() => {
      setThinkingIndex(null);
    }, 2000);
  }, []);

  return (
    <section className="project-list-section" aria-label="项目列表">
      <div className="project-container">
        <div className={`project-left-section ${showLeftSection ? 'visible' : ''}`}>
          <div className="project-main-title">{data.projectListSection.title}</div>
        </div>
        <div className="project-right-section">
          <ul className="project-list" role="list">
            {data.projectListSection.projects.map((project, index) => (
              <li
                className={`project-item ${thinkingIndex === index ? 'thinking' : ''}`}
                key={index}
                onTouchStart={() => handleTouchStart(index)}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={280}
                  height={280}
                  className={`project-item-image ${thinkingIndex === index ? 'visible' : ''}`}
                />
                <span className="project-item-text">{project.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

ProjectSection.displayName = 'ProjectSection';

export default ProjectSection;
