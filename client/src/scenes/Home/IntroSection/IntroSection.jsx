import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.png';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../../hooks/localHook/localHook';
import { INTRO } from '../../../constants/intro';

const IntroSection = () => {
  const introText = useLanguage(INTRO);
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            {introText.title(s.purple)}
          </h1>

          <div className={s.description}>
            {introText.description(s.purple)}
           
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>
    </section>
  );
};

export default IntroSection;
