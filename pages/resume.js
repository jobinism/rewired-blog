import Head from "next/head"
import Script from 'next/script'
import Layout from '../components/layout'

export default function Resume() {
return(  
  <>
    <Head>
      <title>Resume</title>
    </Head>
    <div className="row">
         <iframe src="https://resume.creddle.io/embed/8hw1okrxhxe"
    width="850" height="1100">

    </iframe> 
    </div>

  </>)
}