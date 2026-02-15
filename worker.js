export default {
  async fetch(request) {
    const configs = [
      "vless://736c9bd2-842a-492e-83e4-18d92a7416c7@81.scroogethebest.com:443?type=tcp&security=reality&flow=xtls-rprx-vision&fp=random&pbk=_clqzJ8ZkSG71dSLu5KfRB9NJf63uBbdlDFZ4hp1uBE&sid=3d9bfa9202efd228&sni=m.vk.ru&path=&host=&spx=/#%F0%9F%87%A9%F0%9F%87%AA%20Germany%20%7C%20%F0%9F%8C%90%20Anycast-IP%20%5B%2ACIDR%5D",
      "vless://eb4234b2-8083-4038-af1d-ae752b4ad6d4@130.193.59.133:443?security=reality&encryption=none&flow=xtls-rprx-vision&fp=chrome&pbk=_CjW0Khlrr5z5oc9Oy6-w2ZEanz-zMBktVn5EOX9oTM&sid=4ffc99daad0f261f&sni=yandex.ru#%F0%9F%87%AE%F0%9F%87%B9%20Italy%20%5B%2ACIDR%5D%20YA"
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
