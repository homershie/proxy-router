export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      console.log("⛳️ Path:", path);
      // 如果是首頁，導向 homershie.github.io
      if (path === "/") {
        const response = await fetch("https://homershie.github.io");
        return new Response(response.body, {
          status: response.status,
          headers: response.headers,
        });
      }

      // 定義需要代理的路徑
      const proxyPaths = [
        "/pomodoro",
        "/road_roller_da",
        "/weight_of_wealth",
        "/flowing_clock",
        "/Kon-Satoshi-Introduction",
      ];

      // 檢查是否匹配任何代理路徑
      for (const proxyPath of proxyPaths) {
        if (path.startsWith(proxyPath)) {
          const proxiedUrl = "https://homershie.github.io" + path;
          const response = await fetch(proxiedUrl);
          return new Response(response.body, {
            status: response.status,
            headers: response.headers,
          });
        }
      }

      // 預設回首頁或 404
      return new Response("Not Found", { status: 404 });
    } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
