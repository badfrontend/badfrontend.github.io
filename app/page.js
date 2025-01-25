import PostCard from "@/components/PostCard/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";
import Image from "next/image";

export default function Home() {
  const postMetaData = getPostMetadata('posts');
  console.log(postMetaData)

  return (
    <main>
      <div>
        {postMetaData.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post}/>
        })}
      </div>
    </main>
  )
};
