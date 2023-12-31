import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

import { PostCard, PostWidget, Categories } from "@/components";
import { getPosts } from "@/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home({posts}) {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Far Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {posts}
  }
}