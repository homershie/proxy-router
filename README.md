# proxy-router

一個部署在 Cloudflare Workers 上的代理路由器，用於將特定路徑代理到 GitHub Pages。

## 功能

- 首頁 (`/`) 代理到 `https://homershie.github.io`
- 支援以下專案路徑的代理：
  - `/pomodoro/*`
  - `/road_roller_da/*`
  - `/weight_of_wealth/*`
  - `/flowing_clock/*`
  - `/Kon-Satoshi-Introduction/*`

## 部署方式

1. 安裝 Wrangler CLI：`npm install -g wrangler`
2. 登入 Cloudflare：`wrangler auth login`
3. 部署：`wrangler deploy`

## 文件結構

- `index.js` - Worker 主程式
- `wrangler.toml` - Cloudflare Workers 配置文件
