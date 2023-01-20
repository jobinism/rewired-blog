import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><i>Jarret Coyle</i> is a junior developer, documenting his journey from zero knowledge to <b>full stack web developer</b>. His journey began as an aspiring filmmaker / musician, turned construction site worker. After discovering a love for <i>blockchain</i>, he decided it was time to shake things up, quit his job, and pursue a career in computer programming.</p>
        <p>
          <br />
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}