ж

import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Импортируем иконки сердечка

const PostCard = ({ post }) => {
  const { title, description, backgroundImage, slug, icon } = post;
  const [isLiked, setIsLiked] = useState(false); // Состояние для лайка

  const handleLike = () => {
    setIsLiked(!isLiked); // Переключаем состояние лайка
  };

  return (
    <Link href={`/posts/${slug}`} className="block relative group">
      <article
        className="aspect-[1.5/1] rounded-2xl overflow-hidden relative bg-cover bg-center transition-transform duration-300 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Иконка в правом верхнем углу */}
        {icon && (
          <div className="absolute top-4 right-4">
            <img src={icon} alt="Icon" className="w-8 h-8" />
          </div>
        )}

        {/* Лайк в левом верхнем углу */}
        <button
          onClick={(e) => {
            e.preventDefault(); // Предотвращаем переход по ссылке
            handleLike();
          }}
          className="absolute top-4 left-4 text-white hover:text-red-500 transition-colors duration-300"
        >
          {isLiked ? (
            <FaHeart className="w-6 h-6 text-red-500" />
          ) : (
            <FaRegHeart className="w-6 h-6" />
          )}
        </button>

        {/* Заголовок и описание */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[10%] text-center w-full px-4">
          <div>
            <div className="
              px-2 py-0
              bg-white
              font-bold text-xl lg:text-[22px] xl:text-[28px] inline text-gray-700
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
              text-md lg:text-[16px] xl:text-[22px] inline whitespace-nowrap text-gray-700
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