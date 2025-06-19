export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      const search = url.search;
      console.log("⛳️ Path:", path);

      // 代理所有請求到目標網站
      const targetUrl = "https://homershie-github-io.pages.dev" + path + search;
      console.log("🔄 Proxying to:", targetUrl);

      const response = await fetch(targetUrl);

      // 複製響應頭，但修改一些必要的頭部
      const headers = new Headers(response.headers);

      // 確保 CORS 設定正確
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      headers.set("Access-Control-Allow-Headers", "Content-Type");

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers,
      });
    } catch (error) {
      console.error("❌ Error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
