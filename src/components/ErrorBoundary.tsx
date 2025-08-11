import React from 'react';

type ErrorBoundaryState = { hasError: boolean; message?: string };

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : String(error),
    };
  }

  componentDidCatch(_: unknown, __: unknown) {
    // 標記參數已使用，避免 linter 警告
    void _;
    void __;
    // 可在此上報到 APM/分析平台（Sentry 於專案中已配置 utils/errorTracking）
    // console.error('ErrorBoundary', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-[50vh] flex items-center justify-center text-center px-4'>
          <div>
            <h1 className='text-2xl md:text-3xl font-bold mb-2'>發生錯誤</h1>
            <p className='text-gray-600 mb-4'>
              很抱歉，頁面載入時發生問題，請稍後再試或返回首頁。
            </p>
            <a href='/' className='text-blue-600 hover:underline'>
              返回首頁
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
