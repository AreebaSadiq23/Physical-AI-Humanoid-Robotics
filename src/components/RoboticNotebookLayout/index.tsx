import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

export default function RoboticNotebookLayout({ children }: Props): JSX.Element {
  return (
    <div className={styles.notebookLayout}>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>
            {/* Futuristic Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
            </svg>
            Robotic Notebook
          </h1>
        </header>
        <div className={styles.contentGrid}>
          {children}
        </div>
      </main>
    </div>
  );
}