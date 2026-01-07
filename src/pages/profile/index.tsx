import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

function ProfilePage() {
  const { user, isLoading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!isLoading && !user) {
      // If not loading and no user is logged in, redirect to login page
      history.push('/login');
    }
  }, [user, isLoading, history]);

  if (isLoading || !user) {
    // Show a loading state or nothing while redirecting
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

  return (
    <Layout title="Profile" description="User Profile">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome, {user.username}!</h1>
          <p className="hero__subtitle">Your Profile</p>
        </div>
      </header>
      <main>
        <section className={styles.profileSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--6 col--offset-3', styles.profileCard)}>
                <h2>Profile Details</h2>
                <div className={styles.profileDetail}>
                  <strong>Username:</strong> {user.username}
                </div>
                <div className={styles.profileDetail}>
                  <strong>Email:</strong> {user.email}
                </div>
                {/* Add more profile details here if the 'User' interface is extended */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProfilePage;