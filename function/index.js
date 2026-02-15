export default {
  async fetch(request) {
    const configs = [
      "vless://uuid@ip:port?security=reality...#Server2"
    ].join('\n');

    const headers = {
      "Content-Type": "text/plain; charset=utf-8",
      "Subscription-Userinfo": "upload=0;download=0;total=107374182400;expire=1893456000",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Access-Control-Allow-Origin": "*"
    };

    return new Response(configs, { headers });
  }
};
