import s from './Projects.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { PROJECTS, LABELS } from '../../constants/projects';
import ProjectCard from './ProjectCard/ProjectCard';
import { useLanguage } from '../../hooks/localHook/localHook';

const Projects = () => {
  const labelsText = useLanguage(LABELS);
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          {labelsText.title(s.purple)}
        </h1>
        {labelsText.subtitle(s.subtitle)}

        <ul className={s.projects}>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
