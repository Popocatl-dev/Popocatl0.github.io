import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

      {background && (
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
      )}
    </>
  );
};

export default BaseRoutes;
