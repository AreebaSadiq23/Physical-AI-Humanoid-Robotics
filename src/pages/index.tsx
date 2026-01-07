import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import CyberCard from '../components/CyberCard'; 

import RoboticHero from '../components/RoboticHero'; // Import the new Hero component
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

function HomepageContent() {
  const [inView, setInView] = useState({});
  const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
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
        <div className={clsx(styles.modulesHeader)}>
          <Heading as="h2" className={styles.modulesTitle}>Core Modules</Heading>
        </div>
        <div className={styles.modulesGrid}>
          {modules.map((props, idx) => (
            <div
              key={idx}
              id={`module-${idx}`}
              ref={(el) => (moduleRefs.current[idx] = el)}
              className={clsx(
                styles.moduleItem,
                { [styles.moduleItemVisible]: inView[`module-${idx}`] }
              )}
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
      <RoboticHero /> {/* Use the new RoboticHero component */}
      <main>
        <HomepageContent />
      </main>

    </Layout>
  );
}