import React from 'react';
import Repository from '../Repository/Repository'
import styles from './RepoList.module.css';
import classnames from 'classnames';

const RepoList = ({ repoList, onClickNext, onClickBack, firstRepo, lastRepo }) => {

return(
  <div className={styles.wrap}>
    {repoList.length < 4 ?
      <ol className={styles.repo_list}>
        {repoList.map(repo => (
          <ul key={repo.id} className={styles.repo_name_wrap}>
            <Repository
              url={repo.svn_url}
              name={repo.name}
              language={repo.language}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              updated_at={repo.updated_at}
            />
          </ul>
        ))}
      </ol> :
      <div>
        <ol className={styles.repo_list}>
          {repoList.slice(firstRepo, lastRepo).map(repo => (
            <ul key={repo.id} className={styles.repo_name_wrap}>
              <Repository
                url={repo.svn_url}
                name={repo.name}
                language={repo.language}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
                updated_at={repo.updated_at}
              />
            </ul>
          ))}
        </ol>
        <div className={styles.buttons_wrap}>
          <button
            className={classnames({
              [styles.button]: true,
              [styles.disabled]: firstRepo === 0
            })}
            onClick={() => onClickBack()}
            disabled={firstRepo === 0}
          >
            Назад
          </button>
          <button
            className={classnames({
              [styles.button]: true,
              [styles.disabled]: repoList.length - lastRepo <= 0
            })}
            onClick={() => onClickNext()}
            disabled={repoList.length - lastRepo <= 0}
          >
            Далее
          </button>
        </div>
      </div>
    }
  </div>
)};

export default RepoList;
