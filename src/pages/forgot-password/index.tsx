import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // In a real application, you would send a request to your backend
    // to handle the password reset. For this example, we'll simulate it.

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      // Simulate sending a reset email
      setMessage('If an account with that email exists, a password reset link has been sent.');
      // In a real app: call API to send reset email
    } else {
      // For security, it's often better to give a generic message
      // to avoid confirming whether an email exists.
      setMessage('If an account with that email exists, a password reset link has been sent.');
    }
  };

  return (
    <Layout title="Forgot Password" description="Reset your password">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Forgot Password</h1>
          <p className="hero__subtitle">Enter your email to reset your password</p>
        </div>
      </header>
      <main>
        <section className={styles.forgotPasswordSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--6 col--offset-3', styles.forgotPasswordFormContainer)}>
                <form onSubmit={handleForgotPassword} className={styles.forgotPasswordForm}>
                  {message && <p className={styles.successMessage}>{message}</p>}
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={styles.formControl}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.resetPasswordButton}>Reset Password</button>
                  <p className={styles.loginPrompt}>
                    Remember your password? <a href="/login">Log in here</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ForgotPasswordPage;