import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

function ProfilePage() {
  const { user, isLoading, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isLoading && !user) {
      history.push('/login');
    }
  }, [user, isLoading, history]);

  if (isLoading || !user) {
    return (
      <Layout title="Profile" description="User Profile">
        <main>
          <div className="container padding-top--md padding-bottom--lg">
            <p>Loading profile...</p>
          </div>
        </main>
      </Layout>
    );
  }

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <Layout title="Profile" description="User Profile">
      <main>
        <section className={styles.profileSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4 col--offset-4', styles.profileCard)}>
                <div className={styles.avatar}>{user.username.charAt(0).toUpperCase()}</div>
                <h1>{user.username}</h1>
                <p>Member Profile</p>
                
                <div className={styles.profileDetails}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Username</span>
                    <span className={styles.detailValue}>{user.username}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Email</span>
                    <span className={styles.detailValue}>{user.email}</span>
                  </div>
                </div>

                <button onClick={handleLogout} className={styles.logoutButton}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProfilePage;
