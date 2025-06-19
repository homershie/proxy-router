export default {
  async fetch(request) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      console.log("⛳️ Path:", path);

      // 如果是首頁，返回自己的首頁內容
      if (path === "/") {
        const response = await fetch("https://homershie-github-io.pages.dev");
        return new Response(response.body, {
          status: response.status,
          headers: response.headers,
        });
      }

      // 預設回首頁或 404
      return new Response("Not Found", { status: 404 });
    } catch (error) {
      console.error("❌ Error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};
