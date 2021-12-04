import React from 'react';
import styles from './Contacts.module.css';

const userContacts = {
  email: 'ivanova.ov_87@mail.ru',
  phoneNumber: '+7(925)781-76-97'
};

const Contacts = () => (
  <div className={styles.wrap}>
    <a href='mailto:ivanova.ov_87@mail.ru' className={styles.email_link}>
      { userContacts.email }
    </a>
    <a href='tg://resolve?domain=ivanova_2807' className={styles.phone_link}>
      { userContacts.phoneNumber }
    </a>
    <div className={styles.social_networks}>
      <a
        href='https://github.com/Lesenok2807'
        target='_blank'
        rel='noopener noreferrer'>
      <img className={styles.github} alt='' />
      </a>
      <a
        href='https://vk.com/id40188189'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className={styles.vkontakte} alt='' />
      </a>
      <a
        href='https://www.instagram.com/damon_musk/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className={styles.instagram} alt='' />
      </a>
      <a
        href='https://www.facebook.com/damon.musk'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className={styles.facebook} alt='' />
      </a>
    </div>
  </div>
);

export default Contacts;
