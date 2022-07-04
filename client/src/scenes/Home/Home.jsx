import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import TechSkills from './TechSkills/TechSkills';
import Contact from './Contact/Contact'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';

const Home = () => {
  return (
    <HomeLayout>
      <SectionBG>
        <MainSection />
      </SectionBG>
      <IntroSection />
      <TechSkills/>
      <Contact/>
    </HomeLayout>
  );
};

export default Home;
