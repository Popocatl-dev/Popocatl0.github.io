import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../../hooks/localHook/localHook';

const placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==';

const ProjectCard = ({ id, image, title, text, technologies }) => {
  const location = useLocation();
  const projectText = useLanguage(text);
  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={{
            pathname: `/project/${id}`,
            state: {
              background: location,
            },
          }}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem', maxHeight : '256px' }}
            placeholderSrc={placeholderSrc}
          />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <h3 className={s.title}>{projectText.position} </h3>
          <div className={s.technologies}>
            {technologies.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>

        </div>

        </Link>
      </div>
    </li>
  );
};

export default ProjectCard;
