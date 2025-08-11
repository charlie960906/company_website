import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white/80 backdrop-blur-sm text-gray-800 border-t'>
      <div className='container mx-auto px-4 py-6'>
        <div className='text-center mb-6'>
          <p>
            網站出錯了？{' '}
            <a
              href='https://forms.gle/sHCAX3Ybw2fwRXQt7'
              className='text-blue-600 hover:underline'
            >
              點此告訴我們
            </a>
          </p>
        </div>

        {/* 四欄排版（手機1欄 / 平板2欄 / 桌面4欄），置中對齊 */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 text-center justify-items-center'>
          {/* 支援 */}
          <div className='w-full'>
            <h3 className='font-bold mb-3'>支援</h3>
            <ul className='space-y-1'>
              <li>
                <Link
                  to='/service'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  服務條款
                </Link>
              </li>
              <li>
                <Link
                  to='/database'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  媒體庫
                </Link>
              </li>
              <li>
                <Link
                  to='/terms'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  品牌使用準則
                </Link>
              </li>
            </ul>
          </div>

          {/* 安全和隱私 */}
          <div className='w-full'>
            <h3 className='font-bold mb-3'>安全和隱私</h3>
            <ul className='space-y-1'>
              <li>
                <Link
                  to='/privacy'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  資料和隱私
                </Link>
              </li>
              <li>
                <Link
                  to='/security'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  網路安全
                </Link>
              </li>
              <li>
                <Link
                  to='/freedom'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  表達自由
                </Link>
              </li>
            </ul>
          </div>

          {/* 產品與服務 */}
          <div className='w-full'>
            <h3 className='font-bold mb-3'>產品與服務</h3>
            <ul className='space-y-1'>
              <li>
                <Link
                  to='/tutorgo'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  Tutor Go
                </Link>
              </li>
              <li>
                <Link
                  to='/partner'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  成為合作夥伴
                </Link>
              </li>
            </ul>
          </div>

          {/* 關於 */}
          <div className='w-full'>
            <h3 className='font-bold mb-3'>關於</h3>
            <ul className='space-y-1'>
              <li>
                <Link
                  to='/#history'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  社群發展
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link
                  to='/join'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  加入我們
                </Link>
              </li>
              <li>
                <Link
                  to='/admin'
                  className='inline-block py-1 sm:py-2 text-gray-800 hover:text-blue-600'
                >
                  我們的主管
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-10 text-center'>
          <div className='mb-3'>
            <h4 className='text-sm font-medium mb-2'>關注我們</h4>
            <div className='flex justify-center space-x-4'>
              <a
                href='https://fb.hyjdevelop.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-600'
                aria-label='Follow us on Facebook'
              >
                <Facebook className='h-6 w-6' />
              </a>
              <a
                href='https://ig.hyjdevelop.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-pink-600'
                aria-label='Follow us on Instagram'
              >
                <Instagram className='h-6 w-6' />
              </a>
            </div>
          </div>
          <p className='text-sm text-gray-600'>© 2025 HYJdevelop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
