import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-semibold text-gray-700">
                            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                                Badfrontend
                            </Link></h1>
                    </div>

                    {/* <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                                Главная
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                                О нас
                            </a>
                            <a href="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                                Услуги
                            </a>
                            <a href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
                                Контакты
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;