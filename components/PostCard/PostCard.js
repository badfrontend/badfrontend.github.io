import Link from "next/link";

const PostCard = ({ post }) => {
  const { title, description, backgroundImage, slug } = post;
  return (
    <Link href={`/posts/${slug}`} className="block relative group">
      <article
        className="aspect-[1.91/1] rounded-2xl overflow-hidden relative bg-cover bg-center transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Заголовок */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] text-center w-full px-4">
          <div>
            <div className="
              px-2 py-0
              bg-white
              font-bold text-[32px] text-xl inline text-gray-700
              group-hover:bg-black
              group-hover:text-white
              transition-all duration-500"
            >
              {title}
            </div>
          </div>
          <div>
            <div className="
              px-2 py-0
              bg-white
              text-xl inline whitespace-nowrap text-gray-700
              group-hover:bg-black group-hover:text-white
              transition-all duration-500"
            >
              {description}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;