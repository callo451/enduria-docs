import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const paths = [
  {title: 'Use Enduria', description: 'Learn the ticketing, asset, project, knowledge, licensing, and portal workflows.', href: '/docs/product/overview', label: 'Browse product guides'},
  {title: 'Administer Enduria', description: 'Configure your organisation, access controls, branding, and integrations.', href: '/docs/admin/overview', label: 'Open admin guides'},
  {title: 'Build with the API', description: 'Authenticate, make reliable requests, and subscribe to lifecycle webhooks.', href: '/docs/api/overview', label: 'Explore the API'},
  {title: 'Run it yourself', description: 'Deploy, configure, upgrade, back up, and troubleshoot a self-hosted instance.', href: '/docs/self-hosting/overview', label: 'Read self-hosting docs'},
];

export default function Home() {
  return <Layout title="Documentation" description="Official Enduria product and API documentation">
    <main>
      <section className={styles.hero}><div className="container">
        <div className={styles.eyebrow}>ENDURIA DOCUMENTATION</div>
        <Heading as="h1" className={styles.title}>Everything you need to run better service operations.</Heading>
        <p className={styles.subtitle}>Practical guides for users and administrators, plus the contracts developers need to integrate with Enduria.</p>
        <div className={styles.actions}><Link className="button button--primary button--lg" to="/docs/getting-started/welcome">Get started</Link><Link className="button button--secondary button--lg" to="/docs/api/overview">API documentation</Link></div>
      </div></section>
      <section className={`container ${styles.grid}`} aria-label="Documentation sections">
        {paths.map((path) => <article className={styles.card} key={path.href}><Heading as="h2">{path.title}</Heading><p>{path.description}</p><Link to={path.href}>{path.label} <span aria-hidden="true">→</span></Link></article>)}
      </section>
      <section className={styles.callout}><div className="container"><Heading as="h2">Can’t find what you need?</Heading><p>The documentation is maintained alongside Enduria. Open an issue with the page, task, or API behavior that needs clarification.</p><Link to="https://github.com/dean-enduria/Enduria-SaaS/issues">Request documentation</Link></div></section>
    </main>
  </Layout>;
}
