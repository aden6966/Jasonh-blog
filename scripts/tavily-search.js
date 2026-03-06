#!/usr/bin/env node
// Tavily Search Wrapper - 自动设置 API Key
const { execSync } = require('child_process');

// 设置 API Key
process.env.TAVILY_API_KEY = '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';

// 获取参数
const args = process.argv.slice(2);

// 运行实际的搜索脚本（使用绝对路径）
const searchScript = 'C:\\\\Users\\\\Jason\\\\.openclaw\\\\workspace-xhsmedia\\\\skills\\\\tavily-search\\\\scripts\\\\search.mjs';
const cmd = `node "${searchScript}" ${args.map(a => `"${a}"`).join(' ')}`;
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
