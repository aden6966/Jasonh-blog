#!/usr/bin/env node
// Tavily Extract Wrapper - 自动设置 API Key
const { execSync } = require('child_process');
const path = require('path');

// 设置 API Key
process.env.TAVILY_API_KEY = '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';

// 获取参数
const args = process.argv.slice(2);
const extractScript = path.join(__dirname, '..', 'tavily-search', 'scripts', 'extract.mjs');

// 运行实际的提取脚本
const cmd = `node "${extractScript}" ${args.map(a => `"${a}"`).join(' ')}`;
try {
    const result = execSync(cmd, { 
        encoding: 'utf8',
        env: { ...process.env, TAVILY_API_KEY: process.env.TAVILY_API_KEY }
    });
    console.log(result);
} catch (e) {
    console.error(e.stderr || e.message);
    process.exit(1);
}
