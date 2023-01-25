import Head from "next/head"
import Script from 'next/script'
import Layout from '../components/layout'

export default function Resume() {
return(  
  <Layout>
    <Head>
      <title>Projects</title>
    </Head>
    <iframe src="https://resume.creddle.io/embed/8hw1okrxhxe"
    width={1200} height={1200} seamless>

    </iframe>
  </Layout>)
}