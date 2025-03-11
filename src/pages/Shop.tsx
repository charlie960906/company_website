const Shop = () => {
  return (
      <div className="min-h-screen pb-24">
    {/* Hero Section */}
    <section className="min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">線上商城</h1>
      <h3>即將推出</h3>
      <p>我們的線上商城正在建設中，敬請期待！</p>
      <div className="animate-bounce absolute bottom-12 mid transform -translate-x-1/2">
        {/*<svg 
          className="w-8 h-8 text-gray-400"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 22 22" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>*/}
      </div>
    </section>
    </div>
  );
};

export default Shop;