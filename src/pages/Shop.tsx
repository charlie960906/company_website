import { motion } from 'framer-motion';

const Shop = () => {
  const products = [
    { id: 'p1', name: 'HYJ Notebook', price: 320, tag: '周邊', img: '/logo.png' },
    { id: 'p2', name: 'HYJ 貼紙組', price: 99, tag: '周邊', img: '/logo.png' },
    { id: 'p3', name: 'SLRC T-Shirt', price: 590, tag: '服飾', img: '/logo.png' },
    { id: 'p4', name: '雲端會員(年)', price: 1990, tag: '訂閱', img: '/logo.png' },
  ];

  return (
    <div className='min-h-screen pb-24'>
      {/* Hero */}
      <section className='section-hero flex flex-col items-center justify-center text-center px-4 relative overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-6xl font-bold mb-4 text-gray-800'
        >
          線上商城
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-gray-600'
        >
          探索我們的周邊與訂閱服務
        </motion.p>
      </section>

      {/* Product Grid */}
      <section className='section-screen px-4 flex items-center'>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className='bg-white/80 backdrop-blur rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col'
              >
                <div className='aspect-square rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-3'>
                  <img src={p.img} alt={p.name} className='w-16 h-16 object-contain' />
                </div>
                <div className='text-sm text-blue-600 mb-1'>{p.tag}</div>
                <div className='font-semibold mb-1'>{p.name}</div>
                <div className='text-gray-700 mb-3'>NT$ {p.price}</div>
                <button className='mt-auto inline-flex justify-center items-center px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
                  加入購物車
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='section-screen flex items-center'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='text-2xl md:text-3xl font-bold mb-4'
          >
            想收到上架通知？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className='text-gray-600 mb-6'
          >
            訂閱我們的電子報，第一時間獲得新品與優惠訊息！
          </motion.p>
          <form className='max-w-md mx-auto flex gap-3'>
            <input type='email' placeholder='輸入您的 Email' className='flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
            <button type='submit' className='px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors'>
              訂閱
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Shop;
