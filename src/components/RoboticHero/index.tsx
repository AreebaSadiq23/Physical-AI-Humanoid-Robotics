import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function RoboticHero(): JSX.Element {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftPanel}>
        <h1>AI-Powered Robotic Engineering Notebook</h1>
        <p>
          The next generation of engineering documentation.
          Leverage AI to design, document, and deploy complex robotic systems with unparalleled speed and precision.
        </p>
        <Link
          className={`button button--primary ${styles.ctaButton}`}
          to="/docs/intro">
          Explore the Notebook
        </Link>
      </div>
      <div className={styles.rightPanel}>
        <svg className={styles.robotAnimation} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Each part has a class that triggers its assembly animation */}
          
          {/* Legs */}
          <g className={`${styles['robot-part']} ${styles.legs}`}>
            <rect x="80" y="140" width="40" height="30" rx="5" />
            <rect x="85" y="170" width="10" height="15" rx="3" />
            <rect x="105" y="170" width="10" height="15" rx="3" />
          </g>
          
          {/* Torso */}
          <g className={`${styles['robot-part']} ${styles.torso}`}>
            <rect x="65" y="80" width="70" height="60" rx="10" />
            <circle cx="100" cy="110" r="12" className={styles.eye} />
          </g>

          {/* Head */}
          <g className={`${styles['robot-part']} ${styles.head}`}>
            <rect x="80" y="40" width="40" height="40" rx="8" />
            <rect x="85" y="55" width="30" height="5" rx="2" className={styles.eye} />
          </g>

          {/* Left Arm */}
          <g className={`${styles['robot-part']} ${styles['left-arm']}`}>
            <rect x="40" y="85" width="25" height="15" rx="5" />
            <rect x="45" y="100" width="15" height="30" rx="5" />
          </g>
          
          {/* Right Arm */}
          <g className={`${styles['robot-part']} ${styles['right-arm']}`}>
            <rect x="135" y="85" width="25" height="15" rx="5" />
            <rect x="140" y="100" width="15" height="30" rx="5" />
          </g>

        </svg>
      </div>
    </section>
  );
}
