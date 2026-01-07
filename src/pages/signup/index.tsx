import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from '@docusaurus/router';
import styles from './styles.module.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!username.trim()) {
        setError('Username cannot be empty.');
        return;
    }

    // Dummy signup logic
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user) => user.email === email || user.username === username);

    if (userExists) {
      setError('An account with this email or username already exists.');
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setSuccess('Account created successfully!');
    login(username, email); // Auto-login the new user
    history.push('/profile'); // Redirect to profile page
  };

  return (
    <Layout title="Sign Up" description="Create a new account">

      <main>
        <section className={styles.signupSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--6 col--offset-3', styles.signupFormContainer)}>
                <form onSubmit={handleSignup} className={styles.signupForm}>
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  {success && <p className={styles.successMessage}>{success}</p>}
                  <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      className={styles.formControl}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
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
                  <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className={styles.formControl}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.signupButton}>Sign Up</button>
                  <p className={styles.loginPrompt}>
                    Already have an account? <a href="/login">Log in here</a>.
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

export default SignupPage;