import React from 'react';
import { ReactTitle } from 'react-meta-tags'
import styles from './Contacts.module.css';

const Contacts = () => (
  <div className={styles.wrap}>
    <a href='mailto:ivanova.ov_87@mail.ru' className={styles.email_link}>
      ivanova.ov_87@mail.ru
    </a>
    <a href='tg://resolve?domain=ivanova_2807' className={styles.phone_link}>
      +7(925)781-76-97
    </a>
    <div className={styles.social_networks}>
      <a
        href='https://github.com/Lesenok2807'
        target='_blank'
        rel='noopener noreferrer'>
      <div className={styles.github} name='github' content=''></div>
      </a>
      <a
        href='https://vk.com/id40188189'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.vk} alt='vk' ></div>
      </a>
      <a
        href='https://www.instagram.com/damon_musk/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.instagram} alt='instagram'></div>
      </a>
      <a
        href='https://www.facebook.com/damon.musk'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={styles.facebook} alt='facebook'></div>
      </a>
    </div>
  </div>
);

export default Contacts;
