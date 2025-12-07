import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import styles from './auth.module.css';

function SignUpPage() {
  const handleGoogleSignUp = () => {
    // Placeholder for Google Sign-Up logic
    console.log('Attempting Google Sign-Up...');
    alert('Google Sign-Up is not yet implemented.');
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email/password sign-up logic
    console.log('Attempting Email/Password Sign-Up...');
    alert('Email/Password Sign-Up is not yet implemented.');
  };

  return (
    <Layout noFooter>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Create a new account." />
      </Head>
      <div className={styles.authContainer}>
        <div className={styles.authForm}>
          <h1 className={styles.authTitle}>Create Account</h1>
          
          <form onSubmit={handleSignUp}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
              <input type="email" id="email" className={styles.inputField} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <input type="password" id="password" className={styles.inputField} required />
            </div>
            
            <button type="submit" className={`${styles.button} ${styles.primaryButton}`}>
              Sign Up
            </button>
          </form>

          <div className={styles.separator}>or</div>

          <button onClick={handleGoogleSignUp} className={`${styles.button} ${styles.googleButton}`}>
            <svg className={styles.googleIcon} viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C15.22,5.73 17.45,7.84 17.45,7.84L19.58,5.71C19.58,5.71 16.74,3 12.19,3C6.42,3 2,7.42 2,12.5C2,17.58 6.42,22 12.19,22C17.96,22 22,17.58 22,12.5C22,11.93 21.78,11.1 21.35,11.1Z" />
            </svg>
            Continue with Google
          </button>
          
          <p className={styles.switchAuth}>
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default SignUpPage;
