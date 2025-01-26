    const Header = ({ title, description, backgroundImage }) => {
        return (
          <header 
          className="w-full relative bg-black aspect-[1.1/1] sm:aspect-[1.91/1] bg-cover bg-center overflow-hidden"
          style={backgroundImage ? {
            backgroundImage: `url(${backgroundImage})`,
          } : undefined}
        >
          {/* Заголовок */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[20%] text-center w-full px-4">
            <div className="mb-2">
              <div className="
                px-2 pb-0
                bg-white
                text-[32px] md:text-[48px] lg:text-[72px] inline text-gray-700 leading-[1.2em] font-bold 
                group-hover:bg-black
                group-hover:text-white
                transition-all duration-500"
              >
                {title}
              </div>
            </div>
            {description && (
              <div>
                <div className="
                  px-2 py-0
                  bg-white
                  text-[18px] md:text-[24px] lg:text-[48px] inline whitespace-nowrap text-gray-700
                  group-hover:bg-black group-hover:text-white
                  transition-all duration-500"
                >
                  {description}
                </div>
              </div>
            )
            }
          </div>
        </header>
        )
  };
  
  export default Header;