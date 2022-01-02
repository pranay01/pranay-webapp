import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>

      <section>
        <div className="container">

          <h1>Me in 10 seconds</h1>
          I have been an engineer, product manager, marketeer and entrepreneur. Currently, building SigNoz, an observability platform for Microservice applications.

          I started TapDiscover in 2015. The broad ideas was to make long tail products in local markets easily discoverable.

          Currently based out of Bangalore, India

        </div>
      </section>

      </main>
    </Layout>
  );
}
