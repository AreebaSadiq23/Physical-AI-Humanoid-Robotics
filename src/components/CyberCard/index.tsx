import React from 'react';
import styles from './styles.module.css';

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const DefaultIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
);

export default function CyberCard({ title, description, icon = <DefaultIcon /> }: Props): JSX.Element {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {icon}
        <h3>{title}</h3>
      </div>
      <div className={styles.cardContent}>
        <p>{description}</p>
      </div>
    </div>
  );
}