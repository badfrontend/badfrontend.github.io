    const Header = ({ title, description, backgroundImage }) => {
        return (
          <header 
          className="w-full relative bg-black aspect-[1.91/1] bg-cover bg-center rounded-2xl overflow-hidden"
          style={backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
          } : undefined}
        >
          {/* Заголовок */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[20%] text-center w-full px-4">
            <div>
              <div className="
                mb-8
                px-2 py-0
                bg-white
                font-bold text-[72px] text-xl inline text-gray-700 leading-[1.2em]
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
                text-[48px] inline whitespace-nowrap text-gray-700
                group-hover:bg-black group-hover:text-white
                transition-all duration-500"
              >
                {description}
              </div>
            </div>
          </div>
        </header>
        )
  };
  
  export default Header;