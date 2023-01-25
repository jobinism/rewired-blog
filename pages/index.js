import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><i>Jarret Coyle</i> is a junior developer, documenting his journey from zero knowledge to <b>full stack web developer</b>. His journey began as an aspiring filmmaker / musician, turned construction site worker. After discovering a love for <i>blockchain</i>, he decided it was time to shake things up, quit his job, and pursue a career in computer programming.</p>
        <p>
          <br />
          Check out my projects <u>{' '}
          <a onBlur={{color: 'blue'}} style={{color: 'purple'}} href="/projects">here!</a>
        </u></p>
        <p>
          <br />
          Check out my resume <u>{' '}
          <a onBlur={{color: 'blue'}} style={{color: 'blue'}} href="/resume">here!</a>
        </u></p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}