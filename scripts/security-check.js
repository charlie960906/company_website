#!/usr/bin/env node

/**
 * 網站安全標頭檢查腳本
 * 用於檢查和驗證安全配置
 */

import https from 'https';
import http from 'http';
import { URL } from 'url';

const SECURITY_HEADERS = {
  'Content-Security-Policy': '內容安全政策',
  'Strict-Transport-Security': 'HTTPS 強制',
  'X-Frame-Options': '點擊劫持防護',
  'X-Content-Type-Options': 'MIME 類型保護',
  'X-XSS-Protection': 'XSS 防護',
  'Referrer-Policy': '引用來源政策',
  'Permissions-Policy': '權限政策'
};

const EXPECTED_VALUES = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
};

function checkSecurityHeaders(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      const headers = res.headers;
      const results = {};
      
      console.log(`\n🔍 檢查網站: ${url}`);
      console.log(`📊 HTTP 狀態碼: ${res.statusCode}`);
      console.log(`🔒 安全標頭檢查結果:\n`);
      
      let enabledCount = 0;
      let totalCount = Object.keys(SECURITY_HEADERS).length;
      
      Object.entries(SECURITY_HEADERS).forEach(([header, description]) => {
        const value = headers[header.toLowerCase()];
        const isEnabled = !!value;
        const isCorrect = EXPECTED_VALUES[header] ? value === EXPECTED_VALUES[header] : true;
        
        if (isEnabled) {
          enabledCount++;
          if (isCorrect) {
            console.log(`✅ ${description}: 已啟用 (${value})`);
          } else {
            console.log(`⚠️  ${description}: 已啟用但值不正確 (${value})`);
          }
        } else {
          console.log(`❌ ${description}: 未啟用`);
        }
        
        results[header] = {
          enabled: isEnabled,
          value: value,
          correct: isCorrect
        };
      });
      
      // 計算安全分數
      const score = Math.round((enabledCount / totalCount) * 100);
      console.log(`\n📈 安全評分: ${score}/100`);
      console.log(`📊 已啟用: ${enabledCount}/${totalCount} 項安全措施`);
      
      // 安全建議
      console.log(`\n💡 安全建議:`);
      if (score >= 90) {
        console.log(`🎉 優秀！您的網站安全配置非常完善。`);
      } else if (score >= 70) {
        console.log(`👍 良好！建議啟用剩餘的安全標頭以提升防護等級。`);
      } else if (score >= 50) {
        console.log(`⚠️  一般！建議優先啟用重要的安全標頭。`);
      } else {
        console.log(`🚨 需要改進！建議立即啟用所有安全標頭。`);
      }
      
      if (score < 100) {
        console.log(`\n🔧 需要啟用的安全標頭:`);
        Object.entries(results).forEach(([header, result]) => {
          if (!result.enabled) {
            console.log(`   • ${SECURITY_HEADERS[header]}`);
          }
        });
      }
      
      resolve(results);
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.end();
  });
}

function checkMultipleUrls(urls) {
  console.log('🚀 開始安全標頭檢查...\n');
  
  const promises = urls.map(url => 
    checkSecurityHeaders(url).catch(error => {
      console.error(`❌ 檢查失敗 ${url}:`, error.message);
      return null;
    })
  );
  
  Promise.all(promises).then(() => {
    console.log('\n✨ 所有檢查完成！');
  });
}

// 主程序
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('使用方法: node security-check.js <url1> [url2] [url3]...');
    console.log('例如: node security-check.js https://example.com');
    console.log('或者檢查多個網站: node security-check.js https://site1.com https://site2.com');
    return;
  }
  
  try {
    if (args.length === 1) {
      await checkSecurityHeaders(args[0]);
    } else {
      checkMultipleUrls(args);
    }
  } catch (error) {
    console.error('❌ 檢查過程中發生錯誤:', error.message);
    process.exit(1);
  }
}

// 如果直接執行此腳本
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { checkSecurityHeaders, checkMultipleUrls };
