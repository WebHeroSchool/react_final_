import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';

const App = () => (
  <Router>
    <div className={styles.wrap}>
        <a
          href='https://webheroschool.ru/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.school_link}
        >
          <img className={styles.school_logo} />
        </a>
        <MenuList className={styles.section}>
          <NavLink to='/' exact className={styles.link} activeClassName={styles.active}>Обо мне</NavLink>
          <NavLink to='/todo' className={styles.link} activeClassName={styles.active}>Дела</NavLink>
        </MenuList>
      <Card className={styles.context}>
        <Route path='/' className={styles.component} exact component={About} />
        <Route path='/todo' className={styles.component} activeClassName={styles.active} component={Todo} />
      </Card>
    </div>
  </Router>
);

export default App;
