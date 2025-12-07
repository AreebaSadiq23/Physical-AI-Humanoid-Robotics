import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

function CyberCard({ title, link, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx('col col--6 margin-bottom--lg', styles.cyberCardWrapper)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className={styles.cyberCardLink}>
        <div className={clsx(styles.cyberCard, { [styles.cyberCardHovered]: isHovered })}>
          <div className={styles.cardHeader}>
            <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          </div>
          <div className={styles.cardBody}>
            <p className={styles.cardDescription}>{description}</p>
          </div>
          <div className={styles.cardFooter}>
            <span className={clsx('button button--secondary', styles.exploreButton)}>
              Explore Module
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CyberCard;
