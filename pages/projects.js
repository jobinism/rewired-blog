import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from 'next/script'
import Layout from '../components/layout'


export default function FirstPost() {
  return (
  <Layout>
        <Head>
        <title>Projects</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <h3>PROJECTS</h3>
    <br />
    <br />
    <h5>React Weather App</h5>
    <div className="row">
        <iframe
        src="https://weatherapp-sigma-drab.vercel.app/"
        height={600}
        width={600}
        ></iframe>
    </div>
    <br />
    <h5>Vanilla JS Drum Kit</h5>
    <div className="row">
      <iframe
      src="https://drumkit-azure.vercel.app/"
      height={400}
      width={600}
      ></iframe> 
    </div>   

  
  </Layout>
  
)}