import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './auth.module.css';

function SignInPage() {
  const handleGoogleSignIn = () => {
    // Placeholder for Google Sign-In logic
    console.log('Attempting Google Sign-In...');
    alert('Google Sign-In is not yet implemented.');
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email/password sign-in logic
    console.log('Attempting Email/Password Sign-In...');
    alert('Email/Password Sign-In is not yet implemented.');
  };

  return (
    <Layout noFooter>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign in to your account." />
      </Head>
      <div className={styles.authContainer}>
        <div className={styles.authForm}>
          <h1 className={styles.authTitle}>Sign In</h1>
          
          <form onSubmit={handleSignIn}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
              <input type="email" id="email" className={styles.inputField} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <input type="password" id="password" className={styles.inputField} required />
            </div>
            
            <button type="submit" className={`${styles.button} ${styles.primaryButton}`}>
              Sign In
            </button>
          </form>

          <div className={styles.separator}>or</div>

          <button onClick={handleGoogleSignIn} className={`${styles.button} ${styles.googleButton}`}>
            <svg className={styles.googleIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.22,5.73 17.45,7.84 17.45,7.84L19.58,5.71C19.58,5.71 16.74,3 12.19,3C6.42,3 2,7.42 2,12.5C2,17.58 6.42,22 12.19,22C17.96,22 22,17.58 22,12.5C22,11.93 21.78,11.1 21.35,11.1Z" />
            </svg>
            Continue with Google
          </button>
          
          <p className={styles.switchAuth}>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SignInPage;
