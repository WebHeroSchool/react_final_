import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from "@octokit/rest";

import Contacts from '../Contacts/Contacts';
import RepoList from '../RepoList/RepoList';
import styles from './About.module.css';

const octokit = new Octokit();
const userName = 'Lesenok2807';

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoAboutUser: [],
    isError: false,
    firstRepo: 0,
    lastRepo: 5
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: userName
    })
    .then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        isError: true
      });
    });

    octokit.users.getByUsername({
      username: userName
    })
    .then(({ data }) => {
      this.setState({
        infoAboutUser: data,
        isLoading: false
      });
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        isError: true
      });
    });
  };

  onClickNext = () => {
    this.setState({
      firstRepo: this.state.firstRepo + 4,
      lastRepo: this.state.lastRepo + 4
    });
  };

  onClickBack = () => {
    this.setState({
      firstRepo: this.state.firstRepo - 4,
      lastRepo: this.state.lastRepo - 4
    });
  };

  render() {
   const { isLoading, repoList, isError, infoAboutUser, onClickBack, onClickNext } = this.state;

   return(
     <div className={styles.wrap}>
       <Card className={styles.user_card}>
         { isLoading ?
           <div className={styles.preloader}></div> :
           <div>
             { isError ?
               <div className={styles.info_about_user}>
                 <h1 className={styles.name}>Олеся Иванова</h1>
                 <Contacts />
               </div> :
               <div className={styles.user}>
                 <img src={infoAboutUser.avatar_url} alt='Фото пользователя' className={styles.user_avatar} />
                 <div className={styles.info_about_user}>
                   <h1 className={styles.name}>Олеся Иванова</h1>
                   <div className={styles.bio}>{infoAboutUser.bio}</div>
                   <Contacts />
                 </div>
               </div>
             }
           </div>
         }
       </Card>
       <Card className={styles.repo_card}>
         {isLoading ?
           <div>
             <h3 className={styles.title}>Репозитории на github.com</h3>
             <div className={styles.preloader}></div>
           </div> :
           <div>
             {isError ?
               <div className={styles.error_wrap}>
                 <h3 className={styles.title}>Репозитории на github.com</h3>
                 <div className={styles.error}>
                   <div className={styles.error_image}></div>
                   <p className={styles.error_message}>Что-то пошло не так...</p>
                   <p className={styles.message_try_again}>
                     Попробуйте <a href='.'>загрузить</a> ещё раз
                   </p>
                 </div>
               </div> :
               <div>
                 {repoList.length === 0 ?
                   <div className={styles.error_wrap}>
                     <h3 className={styles.title}>Репозитории на github.com</h3>
                     <div className={styles.error}>
                       <div className={styles.error_image}></div>
                       <p className={styles.error_message}>Репозитории отсутствуют</p>
                       <p className={styles.message_try_again}>
                         Добавьте как минимум один репозиторий на <a href='github.com'>github.com</a>
                       </p>
                     </div>
                   </div> :
                   <RepoList
                     repoList={repoList}
                     infoAboutUser={infoAboutUser}
                     onClickNext={this.onClickNext}
                     onClickBack={this.onClickBack}
                     firstRepo={this.state.firstRepo}
                     lastRepo={this.state.lastRepo}
                   />
                 }
               </div>
             }
           </div>
         }
       </Card>
     </div>
   )
 };
}

export default About;
