import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (typeof window.scrollTo === 'function') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      } catch {
        // 測試環境 (jsdom) 可能未實作 scrollTo，忽略錯誤
      }
    }
  }, [pathname]);
};
