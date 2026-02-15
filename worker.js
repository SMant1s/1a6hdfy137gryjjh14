export default {
  async fetch(request) {
    const configs = [
      "vless://9bc247bd-6fef-468b-91e7-2400e8c0903f@solomonkey47.harknmav.fun:8443?type=tcp&security=reality&flow=xtls-rprx-vision&fp=chrome&pbk=eiz24a6yDleJ94u--ArglngqJdqQp55u2uW1rsO3vx0&sid=946655b57cc58a17&sni=ads.x5.ru&path=&host=#%F0%9F%87%B0%F0%9F%87%BF%20Kazakhstan%20%5B%2ACIDR%5D%20VK",
      "vless://eb4234b2-8083-4038-af1d-ae752b4ad6d4@130.193.59.133:443?security=reality&encryption=none&flow=xtls-rprx-vision&fp=chrome&pbk=_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM&sid=4ffc99daad0f261f&sni=yandex.ru#%F0%9F%87%AE%F0%9F%87%B9%20Italy%20%5B%2ACIDR%5D%20YA",
      "vless://afffbafe-881f-4a06-bc22-d1a49121ba36@84.23.52.70:8443?encryption=none&flow=xtls-rprx-vision&fp=chrome&pbk=7zd9mJilgjOrg_ohtw23Vmio-pdnYqeP_r-kiWt87Cg&security=reality&sid=2715592069f36fe7&sni=m.vk.ru&type=tcp#%F0%9F%87%AD%F0%9F%87%BA%20Hungary%20%5B%2ACIDR%5D%20VK"
    ].join('\n');

    const headers = {
      "Content-Type": "text/plain; charset=utf-8",
      "profile-title": ":) VPN",
      "Subscription-Userinfo": "upload=0;download=715112054784;total=715112054784;expire=253402289999",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Access-Control-Allow-Origin": "*"
    };

    return new Response(configs, { headers });
  }
};
