import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
} from 'react-icons/ai';
import {
  FaGamepad
} from 'react-icons/fa';

import {
  GiTriforce
} from 'react-icons/gi';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../../hooks/localHook/localHook';
import { HEADER } from '../../../constants/contacts';

const NavLinks = () => {
  const headerText = useLanguage(HEADER);
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <GiTriforce />
          {headerText.home}
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} activeClassName={s.active}>
          <FaGamepad />
          {headerText.projects}
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
          <CgFileDocument />
          {headerText.resume}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
