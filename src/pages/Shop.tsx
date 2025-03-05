import { ShoppingBag } from 'lucide-react';

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
          <ShoppingBag className="w-8 h-8 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">線上商城</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          探索我們精心挑選的產品，為您提供最優質的購物體驗。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8">
          <h2 className="text-xl font-bold mb-4">即將推出</h2>
          <p className="text-gray-600">我們的線上商城正在建設中，敬請期待！</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;