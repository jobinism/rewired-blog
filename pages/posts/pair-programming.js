import Head from "next/head"
import Script from 'next/script'
import Layout from '../../components/layout'

export default function PairProgramming() {
  return (
  <Layout>
        <Head>
        <title>Pair Programming</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    <h1>My Thoughts on Pair Programming</h1>
    <br />
    <br />
    <h4><i>11/01/2022 - </i></h4>
<p>
As a current student in a coding bootcamp, there have been many different learning styles. Along with various articles, tutorial videos, lectures and a long list of projects and assignments, we also have taken advantage of pair programming as a tool for learning. My purpose here is to tell you all about my experience so far with pair programming.
</p>
<br />

<p>
<b>So what is pair programming?</b><br />
Simply put, pair programming is a practice where two people work together to write, debug or explore code. In the most common technique there are two roles, a driver and a navigator. The driver will write the code, while the navigator guides the driver and points out any potential issues as they happen. It is often split up in three different ways: expert-to-expert, where two advanced developers work together to execute code, expert-to-novice, where a junior developer is paired with a senior developer or novice-to-novice, where two junior developers work together to navigate a project. In theory it can be very simple, however, it can become more complex the more you use it. There are many factors that might go into it, comfortability with your partner, different levels of understanding, different habits and more can lead to various outcomes and learning opportunities.
</p>

<br />
<p>
<b>What are some benefits of pair programming?</b> <br />
Aside from the satisfaction that can come from more polished code and quicker development, there are many other benefits to pair programming. Pair programming can be an excellent learning opportunity for both parties, every coder is unique, which means they bring their own perspective to every session. This can lead to sharing of key habits, different methods and unique solutions. When working independently, it can be very easy to get distracted and lose focus. With pair programming, one great benefit is having someone with you who can keep you on track when you start to veer off. If all of those examples aren’t enough, let’s think about code accuracy. Sometimes when we write code, we can run into all sorts of syntax issues and road blocks. When we have a navigator, it gives us eyes over our shoulder that can help catch mistakes as they happen, minimizing everyday human error.
</p>
<br />
<p>
<b> Are there any negatives with pair programming?</b><br />
<i>Of course!</i>&nbsp; Like with anything, pair programming comes with some difficulties. Many of the possible issues with pair programming are simple, but can really throw a wrench in your plans. One problem that is fairly common and has the potential to induce stress, is one partner being disengaged from the project, leaving the other to keep the ball rolling. Lack of communication can lead to issues within a pair, if there is discomfort between partners, it can lead to wasted time and unnecessary errors. If both programmers get stuck, that can lead to time wasting and frustration, which can end up making the session less productive than solo work. Because we all have them, sometimes pair programming can lead to introducing your partner, or vice versa, to new bad habits or reinforce the ones you already have.
</p>
<hr />
<br />
<p>
<h2><b>What are some best practices I can use?</b></h2>
<br />
<h4>Communication is key!</h4>
<br />
If pair programming is done without constant communication, it more than likely means they are not sharing their thoughts. Good pair programming comes with talking and thinking out loud.
</p>
<br />
<p>
<h4>Equal work share</h4>
<br />
Obviously every pair is different, but typically a good practice is to swap consistently between driver and navigator. It can be easy to get caught up in your work, so a great way to make sure you are switching enough is setting timers. Try out some different intervals and figure out what works best for you and your partner!
</p>
<br />
<p>
<h4>Ask questions</h4>
<br />
A big part of pair programming is learning, so if you do not understand why you are doing something it is important to ask. In a good setting, you should always feel comfortable asking your partner questions, even if they seem redundant.
</p>
<hr />
<br />
<p>
<b>My personal experiences with Pair Programming</b> <br />
At Lighthouse Labs we have many instances of pair programming. In the earlier weeks of the bootcamp we were paired with other students on some specific assignments&nbsp;<i>(Novice-to-Novice)</i>. Another form of pair programming we use is our mentor sessions, where our mentors act as navigators and guide us through tough coding challenges we have gotten stuck on&nbsp;<i>(Expert-to-Novice)</i>. I personally have found pair programming to be one of my most valuable learning tools. Working with other students who may have different approaches, or know a little more about a subject can be really rewarding. My favourite aspect of pair programming is the opportunity to network and grow with my peers. I hope to continue using this practice in the future, as a tool for growth as I work towards becoming a better developer.
</p>
<br />
<p>
<h5>In conclusion...</h5> 
Often coding can be looked at as an acutely isolated profession, so I believe that practices such as pair programming can be invaluable as we continue to grow as developers. It is very important that we promote teamwork and connectivity as the industry moves towards remote working environments.
</p>  

  
  </Layout>
  
)}