import PostCard from "@/components/PostCard/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";
import Image from "next/image";

export default function Home() {
  const postMetaData = getPostMetadata('posts');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postMetaData.map((post, postIndex) => {
          if (Boolean(post.isHidden)) return null;
          return <PostCard key={postIndex} post={post}/>
        })}
      </div>
    </div>
  )
};
