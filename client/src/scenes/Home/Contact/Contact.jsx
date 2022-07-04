import s from './Contact.module.scss';
import Grid from '@mui/material/Grid';
import { useLanguage } from '../../../hooks/localHook/localHook';
import { CONTACT, SOCIAL } from '../../../constants/contacts';

const ListElement = ({item})=>{
  return(
    <Grid  item xs={6} md={3} className={s.socialLink}>
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={s.socialIcon}
        >
          <item.Icon/>
        </a>
    </Grid>
  );
}

const Contact = () => {
  const contactText = useLanguage(CONTACT);
  const socialList = SOCIAL.map((social) =>
    <ListElement item={social}/>
  );


  return (
    <section className={s.content}>
      <div className={s.introSocial}>
        <h1>{contactText.findme}</h1>
        <p>
          <a
            href={"mailto:" + contactText.mail}   
            className={s.purple}
          >
            {contactText.mail}
          </a>
        </p>

        <Grid container spacing={3}
        justifyContent="center"
        alignItems="center"
        className={s.socialLinks}>
            {socialList}
        </Grid>
      </div>
    </section>
  );
};

export default Contact;
