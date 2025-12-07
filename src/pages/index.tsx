import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import CyberCard from '../components/CyberCard'; // Import CyberCard
import styles from './index.module.css';

const modules = [
  {
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    link: '/docs/core-modules/module-1-robotic-nervous-system',
    description: 'Fundamentals of the Robot Operating System (ROS 2). Learn about ROS 2 architecture, nodes, topics, services, and actions. Develop basic robot behaviors and simulations.',
  },
  {
    title: 'Module 2: The Digital Twin (Gazebo & Unity)',
    link: '/docs/core-modules/module-2-digital-twin',
    description: 'Creating and using digital twins for robot simulation. Explore Gazebo and Unity for building realistic virtual environments and testing robot control algorithms.',
  },
  {
    title: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
    link: '/docs/core-modules/module-3-ai-robot-brain',
    description: 'Developing the AI brain of our robots with NVIDIA Isaac. Dive into advanced AI techniques like reinforcement learning, perception, and navigation for autonomous robots.',
  },
  {
    title: 'Module 4: Vision-Language-Action (VLA)',
    link: '/docs/core-modules/module-4-vla',
    description: 'Vision-Language-Action models and their application in robotics. Understand how robots can interpret complex commands, perceive their environment, and execute tasks.',
  },
];

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.heroTextColumn)}>
            <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
              Dive into the Future of AI
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Explore cutting-edge AI, robotics, and digital twin technologies with our comprehensive modules.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.heroButton)}
                to="/docs/intro">
                Get Started
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6', styles.heroImageColumn)}>
            <img src="/img/1.jfif" alt="AI Robot" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  const [inView, setInView] = useState({});
  const moduleRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target); // Observe once
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the item is visible
      }
    );

    moduleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      moduleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className={styles.modules}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12', styles.modulesHeader)}>
            <Heading as="h2" className={styles.modulesTitle}>Core Modules</Heading>
          </div>
        </div>
        <div className="row">
          {modules.map((props, idx) => (
            <div
              key={idx}
              id={`module-${idx}`}
              ref={(el) => (moduleRefs.current[idx] = el)}
              className={clsx('col col--12 col--md-6 margin-bottom--lg', styles.moduleItem, {
                [styles.moduleItemVisible]: inView[`module-${idx}`],
              })}
            >
              <CyberCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="An AI-native technical textbook on Physical AI & Humanoid Robotics">
      <HeroSection />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}