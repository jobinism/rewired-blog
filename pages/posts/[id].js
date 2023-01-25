import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
      <Layout>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
  </Layout>
  )

}

export async function getStaticPaths() {
  //returns a list of possible values for id
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetches necessary data for the blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData,
    },
  };


}