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
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!username.trim()) {
        setError('Username cannot be empty.');
        return;
    }

    setIsLoading(true);

    // Mock delay to simulate network request
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = users.some((user) => user.email === email || user.username === username);

      if (userExists) {
        setError('An account with this email or username already exists.');
        setIsLoading(false);
        return;
      }

      const newUser = { username, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      login(username, email); // Auto-login the new user
      history.push('/profile'); // Redirect to profile page
    }, 1500);
  };

  return (
    <Layout title="Sign Up" description="Create a new account">
      <main>
        <section className={styles.signupSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4 col--offset-4', styles.signupFormContainer)}>
                <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Sign Up</h1>
                <form onSubmit={handleSignup} className={styles.signupForm}>
                  {error && <p className={styles.errorMessage}>{error}</p>}
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
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={styles.formControl}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%' }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--accent-cyan)',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0'
                        }}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        className={styles.formControl}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{ width: '100%' }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--accent-cyan)',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0'
                        }}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <button type="submit" className={styles.signupButton} disabled={isLoading}>
                    {isLoading ? 'Creating account...' : 'Sign Up'}
                  </button>
                  <p className={styles.loginPrompt} style={{ textAlign: 'center' }}>
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