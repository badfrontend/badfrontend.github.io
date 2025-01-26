const PostContent = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <article className="max-w-[900px] mx-auto rounded-xl">
        <div className="prose prose-xl max-w-none">
          {/* Предполагается, что content это HTML-строка из markdown */}
          {children}
        </div>
      </article>
    </div>
  );
};

export default PostContent; 