import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

function LoginPage() {
  const [identifier, setIdentifier] = useState(''); // Can be email or username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (user) => (user.email === identifier || user.username === identifier) && user.password === password
    );

    if (foundUser) {
      login(foundUser.username, foundUser.email);
      history.push('/profile');
    } else {
      setError('Invalid username/email or password.');
    }
  };

  return (
    <Layout title="Login" description="Login to your account">

      <main>
        <section className={styles.loginSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--6 col--offset-3', styles.loginFormContainer)}>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  <div className={styles.formGroup}>
                    <label htmlFor="identifier">Username or Email</label>
                    <input
                      type="text"
                      id="identifier"
                      className={styles.formControl}
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className={styles.formControl}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.loginButton}>Login</button>
                  <p className={styles.forgotPasswordPrompt}>
                    <a href="/forgot-password">Forgot Password?</a>
                  </p>
                  <p className={styles.signupPrompt}>
                    Don't have an account? <a href="/signup">Sign up here</a>.
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

export default LoginPage;