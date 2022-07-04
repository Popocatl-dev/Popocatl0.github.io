import s from './Footer.module.scss';
import Stack from '@mui/material/Stack';
import { useLanguage } from '../../hooks/localHook/localHook';
import {  SOCIAL, FOOTER } from '../../constants/contacts';

const ListElement = ({item})=>{
  return(
    <span >
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={s.socialIcon}
        >
          <item.Icon/>
        </a>
    </span>
  );
}

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  const footerText = useLanguage(FOOTER);
  const socialList = SOCIAL.map((social) =>
    <ListElement item={social}/>
  );

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>{footerText.credits}</h3>
        </div>

        <div className={s.copyright}>
          <h3>{year} {footerText.dev}</h3>
        </div>

        <div className={s.body}>
          <Stack direction="row" spacing={2} className={s.socialIcons}>
            {socialList}
          </Stack>
        </div>

      </div>
    </div>
  );
};

export default Footer;
